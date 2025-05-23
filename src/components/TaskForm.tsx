import { useState } from "react"
import { useTaskStore } from "../stores/useTaskStore"

export const TaskForm = () => {
  const [text, setText] = useState("")
  const [checked, setChecked] = useState(false)
  const addTask = useTaskStore((state) => state.addTask)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() === "") return
    addTask(text)
    setText("")
    setChecked(false)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2">

      <input
        type="checkbox"
        checked={checked}
        onChange={(e => setChecked(e.target.checked))}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-2 flex-grow"
        placeholder="Write a task..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded p-2">
        Save
      </button>
    </form>
  )
}