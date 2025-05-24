import { create } from "zustand"
import { devtools } from "zustand/middleware"

export type Task = {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

type TaskStore = {
  tasks: Task[]
  addTask: (text: string) => void
  removeTask: (id: string) => void
  toggleTask: (id: string) => void
}


export const useTaskStore = create<TaskStore>()(
  devtools((set) => ({
    tasks: [],
    addTask: (text: string) => {
      const newTask = {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: new Date(),
      }
      set((state) => ({ tasks: [newTask, ...state.tasks] }))
    },
    removeTask: (id: string) => {
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      }))
    },
    toggleTask: (id: string) => {
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ),
      }))
    },
  }))
)
