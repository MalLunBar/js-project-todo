import { useState } from "react"
import { useTaskStore } from "../stores/useTaskStore"

type TaskFormProps = {
  onClose: () => void
}

export const TaskForm = ({ onClose }: TaskFormProps) => {
  const [text, setText] = useState("")
  const [checked, setChecked] = useState(false)
  const addTask = useTaskStore((state) => state.addTask)
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() === "") return
    addTask(text)
    setText("")
    setChecked(false)
    onClose()
    
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="flex gap-2">

    
      <div className="flex bg-white rounded-[15px] shadow-md max-w[400px mx-auto">

        <textarea 
          autoFocus
          rows={1}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="focus:outline-none p-2"
          placeholder="Write a task..."
          onInput={(e) => {
            e.currentTarget.style.height = 'auto'; // Reset height
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; // Grow with content
          }}
        />
        <div className="flex flex-col justify-between gap-4 items-end p-2">

          <button
            type="button"
            className="bg-red-500 text-white rounded p-2">
          
          </button>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2">
            Save
          </button>
        </div>
      </div>
    </form>

  )
}