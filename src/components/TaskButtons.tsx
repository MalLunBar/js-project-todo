

export const TaskButtons = ({ text, onClick }) => {
  return (
    <>
      <button 
        type="button"
        className="bg-white px-3 py-1 rounded-[20px] font-medium hover:bg-[#FFDEA6]"
        onClick={onClick}>
          {text}
      </button>
    </>
  )
} 