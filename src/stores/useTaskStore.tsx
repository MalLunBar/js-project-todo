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
      set((state) => ({ tasks: [...state.tasks, newTask] }))
    },
    removeTask: (id: string) => {
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      }))
    },
  }))
)

// type Note = {
//   id: string
//   title: string
//   tasks: Task[]
//   createdAt: Date
// }

// type NoteStore = {
//   notes: Note[]
//   addNote: (title: string) => void
//   removeNote: (id: string) => void
//   addTask: (noteId: string, text: string) => void
//   removeTask: (noteId: string, taskId: string) => void
//   toggleTask: (noteId: string, taskId: string) => void
// }

// export const useNoteStore = create<NoteStore>()(
//   devtools((set) => ({
//     notes: [],
//     addNote: (title: string, tasks: Task[]) => {
//       const newNote = {
//         id: crypto.randomUUID(),
//         title,
//         tasks,
//         createdAt: new Date(),
//       }
//       set((state) => ({ notes: [...state.notes, newNote] }))
//     },
//     removeNote: (id) => {
//       set((state) => ({
//         notes: state.notes.filter((note) => note.id !== id),
//       }))
//     },
//     addTask: (noteId, text) => {
//       const newTask = {
//         id: crypto.randomUUID(),
//         text,
//         completed: false,
//         createdAt: new Date(),
//       }
//       set((state) => ({
//         notes: state.notes.map((note) =>
//           note.id === noteId ? { ...note, tasks: [...note.tasks, newTask] } : note
//         ),
//       }))
//     },
//     removeTask: (noteId, taskId) => {
//       set((state) => ({
//         notes: state.notes.map((note) =>
//           note.id === noteId
//             ? { ...note, tasks: note.tasks.filter((task) => task.id !== taskId) }
//             : note
//         ),
//       }))
//     },
//     toggleTask: (noteId, taskId) => {
//       set((state) => ({
//         notes: state.notes.map((note) =>
//           note.id === noteId
//             ? {
//               ...note,
//               tasks: note.tasks.map((task) =>
//                 task.id === taskId ? { ...task, completed: !task.completed } : task
//               ),
//             }
//             : note
//         ),
//       }))
//     },
//   }))
// )