type TaskButtonsProps = {
  text: string
  onClick: () => void
}


export const TaskButtons = ({ text, onClick }: TaskButtonsProps) => {
  console.log("TaskButtons rendered")

  return (
    <>
      <button
        type="button"
        className="bg-white px-3 py-1 rounded-[20px] font-medium max-w-40 hover:bg-[#FFDEA6] sm:text-lg"
        onClick={onClick}>
        {text}
      </button>
    </>
  )
} 