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
    <div className="flex flex-col gap-10 bg-[url(/assets/note-background-smaller.jpg)] bg-cover bg-no-repeat bg-center h-screen w-full rounded-[20px] px-3 py-4 sm:bg-[url(/assets/note-background.jpg)]">

      <div className="flex justify-between items-start">
        <TaskButtons
          text="New Task +"
          onClick={() => setShowForm(true)}
        />


        {tasks.length > 0 && (
          <div className="flex flex-col gap-1 ">
            {["all", "completed", "uncompleted"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as "all" | "completed" | "uncompleted")}
                className={`px-2 py-1 rounded-2xl ${filter === type ? "bg-violet-400 text-white" : "bg-white text-black"}`}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>


      {showForm && (
        <div className="flex justify-center">
          <TaskForm onClose={() => setShowForm(false)} />
        </div>
      )}

      {tasks.length === 0 && !showForm && <EmptyState />}

      {
        filteredTasks.length > 0 && (
          <div className="flex flex-col items-center">
            <div className="scrollbar-always-show max-h-[60vh] w-full px-1">
              <TaskList tasks={filteredTasks} />
            </div>
            <TaskCount />
          </div>
        )
      }

    </div >
  )
}