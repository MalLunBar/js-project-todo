import { useEffect, useState, useRef } from "react"
import { useTaskStore } from "../stores/useTaskStore"

type TaskFormProps = {
  onClose: () => void
}


export const TaskForm = ({ onClose }: TaskFormProps) => {
  const [text, setText] = useState("")
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const addTask = useTaskStore((state) => state.addTask)

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() === "") {
      setError("Please enter a task")
      textareaRef.current?.focus()
      return
    }
    addTask(text)
    setText("")
    setChecked(false)
    onClose()
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2">

      <div className="mt-2 flex justify-between bg-white rounded-[15px] mx-auto sm:w-[450px] sm:h-[120px]">
        <label htmlFor="task-input" className="sr-only">Task text</label>
        <textarea
          id="task-input"
          aria-describedby={error ? "task-error" : undefined}
          ref={textareaRef}
          rows={1}
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            if (error) setError("")
          }}
          className="focus:outline-none p-2 resize-none mx-auto sm:w-[450px] sm:h-[100px]"
          placeholder="Write a task..."
          onInput={(e) => {
            e.currentTarget.style.height = "auto"
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`
          }}
        />

        <div className="flex flex-col justify-between gap-4 items-end p-2">

          <button
            type="button"
            className="rounded p-2"
            onClick={onClose}>
            <img
              src="/assets/close.png"
              alt="Close"
              className="w-4 h-4 object-contain" />
          </button>

          <button
            type="submit"
            className="font-medium rounded-2xl py-1 px-2 bg-[#FFDEA6] sm:py-2 sm:px-4 hover:bg-[#FFC116] sm:text-lg">
            Done
          </button>
        </div>
      </div>
      {error && <p
        id="task-error"
        className="text-red-500 bg-white px-3 font-bold text-sm mt-1 mx-2 rounded-lg sm:text-base">{error}</p>}
    </form>

  )
}