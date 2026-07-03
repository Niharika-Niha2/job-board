import jobs from "../../../../data/jobs";
import Link from "next/link";

export default async function ApplyPage({ params }) {
  const { id } = await params;

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Job Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5EF] py-10 px-5">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <Link
          href={`/jobs/${job.id}`}
          className="text-[#2F6F6D] font-semibold hover:underline"
        >
          ← Back to Job Details
        </Link>

        <h1 className="text-4xl font-bold text-[#1C1B1A] mt-6">
          Apply for {job.title}
        </h1>

        <p className="text-xl text-[#2F6F6D] mb-8">
          {job.company}
        </p>

        <form className="space-y-6">

  <div>
    <label className="block mb-2 font-semibold text-[#1C1B1A]">
      Full Name
    </label>

    <input
      type="text"
      placeholder="Enter your full name"
      className="w-full border border-gray-300 rounded-lg p-3 text-[#1C1B1A] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F6F6D]"
    />
  </div>

  <div>
    <label className="block mb-2 font-semibold text-[#1C1B1A]">
      Email
    </label>

    <input
      type="email"
      placeholder="Enter your email"
      className="w-full border border-gray-300 rounded-lg p-3 text-[#1C1B1A] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F6F6D]"
    />
  </div>

  <div>
    <label className="block mb-2 font-semibold text-[#1C1B1A]">
      Phone Number
    </label>

    <input
      type="tel"
      placeholder="Enter your phone number"
      className="w-full border border-gray-300 rounded-lg p-3 text-[#1C1B1A] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F6F6D]"
    />
  </div>

  <div>
    <label className="block mb-2 font-semibold text-[#1C1B1A]">
      Resume Link
    </label>

    <input
      type="url"
      placeholder="Paste your resume link"
      className="w-full border border-gray-300 rounded-lg p-3 text-[#1C1B1A] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F6F6D]"
    />
  </div>

  <div>
    <label className="block mb-2 font-semibold text-[#1C1B1A]">
      Cover Letter
    </label>

    <textarea
      rows="5"
      placeholder="Tell us why you're a great fit..."
      className="w-full border border-gray-300 rounded-lg p-3 text-[#1C1B1A] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F6F6D]"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-[#2F6F6D] hover:bg-[#255957] text-white py-3 rounded-lg font-semibold transition"
  >
    Submit Application
  </button>

</form>

      </div>

    </main>
  );
}