

export const HeroMessage = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-4 pt-2">
        <img
          src="../assets/logo1.png" alt="Logo"
          className="w-full max-w-[100px] h-auto" />
        <img
          src="../assets/user.png" alt="User"
          className="w-6 h-auto" />
      </header>
      <div className="flex flex-col-reverse py-10 px-12 sm:py-24 sm:px-20 max-w-[400px] sm:max-w-[500px] md:max-w-[600px] m-auto mx-auto lg:min-w-[500px] lg:px-12 lg:py-40">
        <h1 className="font-medium text-3xl sm:text-5xl md:text-6xl">From Clutter to <span className="text-[#FFBB00]">Done</span> with Done-ly</h1>
        <p className="font-light text-base sm:text-xl">Make it simple</p>

      </div>
    </div>
  );
}