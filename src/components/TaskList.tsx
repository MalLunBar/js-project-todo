import { useTaskStore } from "../stores/useTaskStore"



export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks)
  const removeTask = useTaskStore((state) => state.removeTask)
  const toggleTask = useTaskStore((state) => state.toggleTask)


  return (

    <ul className="mt-4 flex flex-col gap-3 w-full max-w-full sm:max-w-[450px] sm:mx-auto sm:mt-10">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            className="w-5 h-5 accent-black"
          />
          <div className="bg-white text-lg rounded-xl p-2 flex items-start justify-between w-full">
            <p className={`flex-1 break-words whitespace-pre-wrap ${task.completed ? "line-through text-gray-400" : ""}`}>
              {task.text}
            </p>
            <button
              onClick={() => removeTask(task.id)} className="ml-2">
              <img
                src="/assets/set.png"
                alt="Delete task"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
