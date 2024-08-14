export const Header = () => {
  return (
    <header className="flex justify-center lg:justify-between items-center h-14 w-full p-2 border-b-2 border-black">
      <a href="/" className="text-2xl font-bold hidden lg:block">
        Blog App
      </a>

      <p className="text-xl font-semibold  lg:block">Created by Arihant Jain</p>
    </header>
  );
};
