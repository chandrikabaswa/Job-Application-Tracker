import { useEffect, useState } from "react";
import { JobForm } from "./components/JobForm";
import { JobList } from "./components/JobList";
import { SearchBar } from "./components/SearchBar";
import { FilterBar } from "./components/FilterBar";
import { DashboardStats } from "./components/DashboardStats";
import axios from "axios";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [filterStatus, setFilterStatus] = useState("All");

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await axios.get("http://localhost:3000/jobs");

        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchJobs();
  }, []);

  async function addJob(newJob) {
    const response = await axios.post("http://localhost:3000/jobs", newJob);

    setJobs((prevJobs) => [...prevJobs, response.data]);
  }

  async function deleteJob(id) {
    await axios.delete(`http://localhost:3000/jobs/${id}`);

    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  }

  async function updateStatus(id, newStatus) {
    await axios.put(`http://localhost:3000/jobs/${id}`, {
      status: newStatus,
    });

    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, status: newStatus } : job,
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
