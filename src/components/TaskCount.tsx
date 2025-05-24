import { useTaskStore } from '../stores/useTaskStore'

export const TaskCount = () => {
  const totalTasks = useTaskStore((state) => state.tasks.length);
  const completedTasks = useTaskStore((state) =>
    state.tasks.filter((task) => task.completed).length
  )
  const uncompletedTasks = useTaskStore((state) =>
    state.tasks.filter((task) => !task.completed).length
  )

  return (
    <div className="bg-white opacity-90 p-4 rounded-2xl mt-4 text-black mx-auto text-center font-semibold">
      <p>Completed: {completedTasks}</p>
      <p>Left: {uncompletedTasks}</p>
    </div>
  )

}