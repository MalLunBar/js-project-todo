import { TaskButtons } from "./TaskButtons"
import { useState } from "react"
import { TaskForm } from "./TaskForm"




export const TaskArea = () => {
  const [showForm, setShowForm] = useState(false)


  return (
    <div className="flex flex-col gap-2 bg-[url(/assets/note-backgorund-smaller.jpg)] bg-cover bg-no-repeat bg-center h-screen w-full rounded-[20px] px-3 py-4">
      <div className="flex justify-between items-center">
       
        <TaskButtons
          text="New Task +"
          onClick={() => setShowForm(true)} />

      </div>
      {showForm && <TaskForm />}

    </div>
  )
}