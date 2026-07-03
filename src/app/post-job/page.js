import Link from "next/link";

export default function PostJob() {
  return (
    <main className="min-h-screen bg-[#F7F5EF] flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">

        <Link
          href="/"
          className="text-[#2F6F6D] font-semibold hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-[#1C1B1A] mt-6 mb-8">
          Post a New Job
        </h1>

        <form className="space-y-5">

          <div>
            <label className="block mb-2 font-semibold text-[#1C1B1A]">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Frontend Developer"
              className="w-full border border-gray-300 rounded-lg p-3 text-[#1C1B1A] placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-[#1C1B1A]">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Google"
              className="w-full border border-gray-300 rounded-lg p-3 text-[#1C1B1A] placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-[#1C1B1A]">
              Location
            </label>
            <input
              type="text"
              placeholder="Hyderabad"
              className="w-full border border-gray-300 rounded-lg p-3 text-[#1C1B1A] placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-[#1C1B1A]">
              Salary
            </label>
            <input
              type="text"
              placeholder="₹10 LPA"
              className="w-full border border-gray-300 rounded-lg p-3 text-[#1C1B1A] placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-[#1C1B1A]">
              Job Description
            </label>
            <textarea
              rows="5"
              placeholder="Enter job description..."
              className="w-full border border-gray-300 rounded-lg p-3 text-[#1C1B1A] placeholder-gray-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2F6F6D] hover:bg-[#255957] text-white py-3 rounded-lg font-semibold"
          >
            Publish Job
          </button>

        </form>

      </div>
    </main>
  );
}