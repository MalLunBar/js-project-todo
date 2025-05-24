import { TaskButtons } from "./TaskButtons"
import { useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { EmptyState } from "./EmptyState"
import { useTaskStore } from "../stores/useTaskStore"
import { TaskCount } from "./TaskCount"

export const TaskArea = () => {
  const [showForm, setShowForm] = useState(false)
  const tasks = useTaskStore((state) => state.tasks)


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

      {tasks.length === 0 && !showForm && <EmptyState />}

      {tasks.length > 0 && (
        <div className="flex flex-col items-center">
          <TaskList />
          <TaskCount />
        </div>
      )}

    </div>
  )
}