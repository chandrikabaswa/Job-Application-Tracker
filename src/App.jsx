import { useEffect, useState } from "react";
import { JobForm } from "./components/JobForm";
import { JobList } from "./components/JobList";
import { SearchBar } from "./components/SearchBar";
import { FilterBar } from "./components/FilterBar";
import { DashboardStats } from "./components/DashboardStats";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [filterStatus, setFilterStatus] = useState("All");

  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");

    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  function addJob(newJob) {
    setJobs((prevJobs) => [
      ...prevJobs,
      {
        id: Date.now(),
        dateAdded: new Date().toLocaleDateString(),
        ...newJob,
      },
    ]);
  }

  function deleteJob(id) {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  }

  function updateStatus(id, newStatus) {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id
          ? {
              ...job,
              status: newStatus,
            }
          : job,
      ),
    );
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === "All" || job.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <h1>Job Application Tracker</h1>

      <DashboardStats jobs={jobs} />

      <div className="search-filter-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <FilterBar
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
      </div>

      <JobForm addJob={addJob} />

      <JobList
        jobs={filteredJobs}
        deleteJob={deleteJob}
        updateStatus={updateStatus}
      />
    </>
  );
}

export default App;
