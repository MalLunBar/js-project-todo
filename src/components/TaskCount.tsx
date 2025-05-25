import { useTaskStore } from "../stores/useTaskStore"

export const TaskCount = () => {
  const totalTasks = useTaskStore((state) => state.tasks.length)
  const completedTasks = useTaskStore((state) =>
    state.tasks.filter((task) => task.completed).length
  )
  const uncompletedTasks = useTaskStore((state) =>
    state.tasks.filter((task) => !task.completed).length
  )

  return (
    <div className="bg-white px-3 py-1 rounded-lg mt-8 text-black mx-auto text-center font-semibold">
      <p>Completed: {completedTasks}/{totalTasks}</p>
    </div>
  )
}