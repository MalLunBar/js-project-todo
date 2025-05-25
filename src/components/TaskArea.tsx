import { TaskButtons } from "./TaskButtons"
import { useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { EmptyState } from "./EmptyState"
import { useTaskStore } from "../stores/useTaskStore"
import { TaskCount } from "./TaskCount"


export const TaskArea = () => {
  const [showForm, setShowForm] = useState(false)
  const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">("all")
  const tasks = useTaskStore((state) => state.tasks)

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed
    if (filter === "uncompleted") return !task.completed
    return true // For "all" filter
  })

  return (
    <div className="flex flex-col gap-2 bg-[url(/assets/note-background-smaller.jpg)] bg-cover bg-no-repeat bg-center h-screen w-full rounded-[20px] px-3 py-4 sm:bg-[url(/assets/note-background.jpg)]">

      <div className="flex justify-between items-center">
        <TaskButtons
          text="New Task +"
          onClick={() => setShowForm(true)}
        />
        <div>
          {["all", "completed", "uncompleted"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as "all" | "completed" | "uncompleted")}
              className={`px-3 py-1 rounded-lg mr-2 ${filter === type ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
              {type}
            </button>
          ))}
        </div>
      </div>



      {showForm && (
        <div className="flex justify-center">
          <TaskForm onClose={() => setShowForm(false)} />
        </div>
      )}

      {filteredTasks.length === 0 && !showForm && <EmptyState />}

      {
        filteredTasks.length > 0 && (
          <div className="flex flex-col items-center">
            <TaskList tasks={filteredTasks}/>
            <TaskCount />
          </div>
        )
      }

    </div >
  )
}