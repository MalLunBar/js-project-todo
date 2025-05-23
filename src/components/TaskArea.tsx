import { TaskButtons } from "./TaskButtons"
import { useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { EmptyState } from "./EmptyState"
import { useTaskStore } from "../stores/useTaskStore"




export const TaskArea = () => {
  const [showForm, setShowForm] = useState(false)
  const tasks = useTaskStore((state) => state.tasks)
  const noTasksYet = tasks.length === 0

  return (
    <div className="flex flex-col gap-2 bg-[url(/assets/note-background-smaller.jpg)] bg-cover bg-no-repeat bg-center h-screen w-full rounded-[20px] px-3 py-4 sm:bg-[url(/assets/note-background.jpg)]">
      <div className="flex justify-between items-center">
        <TaskButtons
          text="New Task +"
          onClick={() => setShowForm(true)}
        />
      </div>

      {showForm && (
        <div className="flex justify-center">
          <TaskForm onClose={() => setShowForm(false)} />
        </div>
      )}

      {!showForm && tasks.length === 0 && <EmptyState />}

      {tasks.length > 0 && <TaskList />}
    </div>
  )
}