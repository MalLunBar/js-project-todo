

export const HeroMessage = () => {
  return (
    <>
      <header className="flex justify-between items-center px-4 pt-2">
        <img
          src="../assets/logo1.png" alt="Logo"
          className="w-full max-w-[100px] h-auto" />
        <img
          src="../assets/user.png" alt="User"
          className="w-6 h-auto" />
      </header>
      <div className="flex flex-col-reverse px-13 py-10 sm:py-20 sm:px-26">
        <h1 className="font-medium text-2xl sm:text-5xl">From Clutter to <span className="text-[#FFC116]">Done</span> with Done-ly</h1>
        <p className="font-light text-base sm:text-xl">Make it simple</p>

      </div>
    </>
  );
}