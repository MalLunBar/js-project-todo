import { NoteButtons } from "./NoteButtons"


export const NoteArea = () => {
  return(
    <div className="flex flex-col gap-2 bg-[url(/assets/note-backgorund-smaller.jpg)] bg-cover bg-no-repeat bg-center h-screen w-full rounded-[20px] p-4">
      <div className="flex justify-between items-center">
        <NoteButtons text="New Note +" />
        <NoteButtons text="My Notes" />
      </div>
      
    </div>
  )
}