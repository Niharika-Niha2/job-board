import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">

      <div className="flex justify-between items-start gap-3">

        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#1C1B1A]">
            {job.title}
          </h2>

          <p className="text-[#2F6F6D] font-semibold mt-1">
            {job.company}
          </p>
        </div>

        <span className="bg-[#E8A33D] text-white px-3 py-1 rounded-full text-xs md:text-sm">
          {job.type}
        </span>

      </div>

      <div className="mt-5 space-y-2 text-gray-700">

        <p>📍 {job.location}</p>

        <p>💰 {job.salary}</p>

        <p>🧑‍💻 {job.experience}</p>

      </div>

      <Link href={`/jobs/${job.id}`}>
        <button className="mt-6 w-full bg-[#2F6F6D] hover:bg-[#255957] text-white py-3 rounded-lg font-semibold transition">
          View Details
        </button>
      </Link>

    </div>
  );
}