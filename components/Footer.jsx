import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1B1A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-3xl font-bold text-[#2F6F6D]">
              JobBoard
            </h2>

            <p className="mt-3 text-gray-300">
              Find your dream job and connect with top companies worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/">Jobs</Link>
              <Link href="/post-job">Post Job</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Contact
            </h3>

            <p>Email: support@jobboard.com</p>
            <p>Hyderabad, India</p>
          </div>

        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 JobBoard. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}