import { useState } from "react"
import { useTaskStore } from "../stores/useTaskStore"

export const TaskForm = () => {
  const [text, setText] = useState("")
  const [checked, setChecked] = useState(false)
  const addTask = useTaskStore((state) => state.addTask)
  const removeTask = useTaskStore((state) => state.removeTask)

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
      <div className="flex bg-white rounded-[15px] shadow-md max-w[400px mx-auto">

        <textarea
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
            className="h-6 w-6">
            <img src="/assets/set.png" alt="" />
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