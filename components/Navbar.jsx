import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-5 border-b bg-[#F7F5EF]">

      <Link href="/">
        <h1 className="text-3xl font-bold text-[#2F6F6D] cursor-pointer">
          JobBoard
        </h1>
      </Link>

      <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0 font-medium">

        <Link href="/" className="hover:text-[#2F6F6D] transition">
          Home
        </Link>

        <Link href="/" className="hover:text-[#2F6F6D] transition">
          Jobs
        </Link>

        <Link href="/post-job" className="hover:text-[#2F6F6D] transition">
          Post Job
        </Link>

      </div>

    </nav>
  );
}