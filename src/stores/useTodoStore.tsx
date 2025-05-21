import { create } from "zustand"

type Task = {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

type Note = {
  id: string
  title: string
  tasks: Task[]
  createdAt: Date
}

type NoteStore = {
  notes: Note[]
  addNote: (title: string) => void
  removeNote: (id: string) => void
  addTask: (noteId: string, text: string) => void
  removeTask: (noteId: string, taskId: string) => void
  toggleTask: (noteId: string, taskId: string) => void
}

export const useNoteStore = create<NoteStore>((set) => ({
  notes: [],
  addNote: (title) => {
    const newNote = {
      id: crypto.randomUUID(),
      title,
      tasks: [],
      createdAt: new Date(),
    }
    set((state) => ({ notes: [...state.notes, newNote] }))
  },
  removeNote: (id) => {
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    }))
  },
  addTask: (noteId, text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    }
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === noteId ? { ...note, tasks: [...note.tasks, newTask] } : note
      ),
    }))
  },
  removeTask: (noteId, taskId) => {
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === noteId
          ? { ...note, tasks: note.tasks.filter((task) => task.id !== taskId) }
          : note
      ),
    }))
  },
  toggleTask: (noteId, taskId) => {
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === noteId
          ? {
              ...note,
              tasks: note.tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
              ),
            }
          : note
      ),
    }))
  },
}))