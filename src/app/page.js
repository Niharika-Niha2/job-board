"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import JobCard from "../../components/JobCard";

import jobs from "../../data/jobs";

export default function Home() {

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [jobType, setJobType] = useState("All");

  const filteredJobs = jobs.filter((job) => {

    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchLocation =
      location === "All" || job.location === location;

    const matchType =
      jobType === "All" || job.type === jobType;

    return matchSearch && matchLocation && matchType;

  });

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#1C1B1A]">

      <Navbar />

      <Hero
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        jobType={jobType}
        setJobType={setJobType}
      />

      <section className="px-10 pb-20">

        <h3 className="text-3xl font-bold mb-8">
          Featured Jobs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <h2 className="text-xl text-gray-600">
              No jobs found.
            </h2>
          )}

        </div>

      </section>

    </main>
  );
}