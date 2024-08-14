import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex gap-2 justify-center lg:justify-between items-center h-14 w-full p-2 border-b-2 border-black">
      <Link href="/" className="text-2xl font-bold hidden lg:block">
        Blog App
      </Link>
      <Link href="/contact-us" className="text-lg underline ">
        Contact-Us
      </Link>

      <p className="text-xl font-semibold  lg:block">Created by Arihant Jain</p>
    </header>
  );
};
