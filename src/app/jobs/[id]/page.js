import jobs from "../../../../data/jobs";
import Link from "next/link";

export default async function JobDetails({ params }) {
  const { id } = await params;

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F5EF]">
        <h1 className="text-4xl font-bold text-red-600">
          Job Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5EF] py-8 px-4 md:px-8">

      {/* Back Button */}
      <Link
        href="/"
        className="inline-block text-[#2F6F6D] font-semibold hover:underline mb-6"
      >
        ← Back to Home
      </Link>

      {/* Job Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C1B1A] mb-3">
          {job.title}
        </h1>

        {/* Company */}
        <p className="text-xl md:text-2xl font-semibold text-[#2F6F6D] mb-8">
          {job.company}
        </p>

        {/* Job Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

          <div className="bg-gray-100 rounded-lg p-4">
            <p className="font-semibold text-[#1C1B1A]">
              📍 Location
            </p>
            <p className="text-gray-700">
              {job.location}
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4">
            <p className="font-semibold text-[#1C1B1A]">
              💰 Salary
            </p>
            <p className="text-gray-700">
              {job.salary}
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4">
            <p className="font-semibold text-[#1C1B1A]">
              💼 Job Type
            </p>

            <span className="inline-block mt-2 bg-[#2F6F6D] text-white px-3 py-1 rounded-full text-sm">
              {job.type}
            </span>
          </div>

          <div className="bg-gray-100 rounded-lg p-4">
            <p className="font-semibold text-[#1C1B1A]">
              🧑‍💻 Experience
            </p>

            <p className="text-gray-700">
              {job.experience}
            </p>
          </div>

        </div>

        {/* Description */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#2F6F6D] mb-4">
          Job Description
        </h2>

        <p className="text-gray-700 leading-8 mb-10">
          {job.description}
        </p>

        {/* Skills */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#2F6F6D] mb-4">
          Required Skills
        </h2>

        <div className="flex flex-wrap gap-3 mb-10">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="bg-[#2F6F6D] text-white px-5 py-2 rounded-full font-medium hover:bg-[#255957] transition"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">

          <Link href={`/apply/${job.id}`} className="w-full sm:w-auto">
            <button className="w-full bg-[#2F6F6D] hover:bg-[#255957] text-white px-8 py-3 rounded-lg font-semibold transition">
              Apply Now
            </button>
          </Link>

          <button className="w-full sm:w-auto border-2 border-[#2F6F6D] text-[#2F6F6D] hover:bg-[#2F6F6D] hover:text-white px-8 py-3 rounded-lg font-semibold transition">
            Save Job
          </button>

        </div>

      </div>

    </main>
  );
}