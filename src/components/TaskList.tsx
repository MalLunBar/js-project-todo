import { useTaskStore } from "../stores/useTaskStore"
import { format } from "date-fns"
import { Task } from "../stores/useTaskStore"

interface TaskListProps {
  tasks: Task[]
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const removeTask = useTaskStore((state) => state.removeTask)
  const toggleTask = useTaskStore((state) => state.toggleTask)

  return (

    <ul className="flex flex-col gap-3 px-2 max-w-[600px] ">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            className="w-5 h-5 accent-black"
          />
          <div className="bg-white text-lg rounded-xl p-2 flex items-start justify-between w-full min-w-[200px] max-w-full">
            <div className="flex flex-col gap-1 min-w-0 w-full">
              <p className="text-sm text-gray-500">
                {format(new Date(task.createdAt), "yyyy-MM-dd")}
              </p>
              <p className={`flex-1 break-words whitespace-pre-wrap ${task.completed ? "line-through text-gray-400" : ""}`} style={{ wordBreak: "break-word" }}>
                {task.text}
              </p>
            </div>
            <button
              onClick={() => removeTask(task.id)} className="ml-2 flex-shrink-0">
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
