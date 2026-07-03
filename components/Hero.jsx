"use client";

export default function Hero({
  search,
  setSearch,
  location,
  setLocation,
  jobType,
  setJobType,
}) {
  return (
    <section className="text-center py-16 md:py-20 px-4 md:px-6">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Find Your <span className="text-[#2F6F6D]">Dream Job</span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
        Explore thousands of opportunities from top companies around the world.
      </p>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search by job title or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 border border-gray-300 rounded-lg px-5 py-3 shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#2F6F6D]"
        />

        {/* Location */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full md:w-56 border border-gray-300 rounded-lg px-5 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#2F6F6D]"
        >
          <option value="All">📍 All Locations</option>
          <option>Hyderabad</option>
          <option>Bangalore</option>
          <option>Chennai</option>
          <option>Pune</option>
          <option>Remote</option>
        </select>

        {/* Job Type */}
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="w-full md:w-56 border border-gray-300 rounded-lg px-5 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#2F6F6D]"
        >
          <option value="All">💼 All Types</option>
          <option>Full Time</option>
          <option>Remote</option>
          <option>Internship</option>
        </select>

      </div>
    </section>
  );
}