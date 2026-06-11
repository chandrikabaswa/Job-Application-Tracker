import { JobCard } from './JobCard';
import './JobList.css';

export function JobList({
  jobs,
  deleteJob,
  updateStatus
}) {
  return (
    <div className="job-list" >
      <h2>Your Applications</h2>

      {jobs.length === 0 && (
        <p>No applications yet.</p>
      )}

      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          deleteJob={deleteJob}
          updateStatus={updateStatus}
        />
      ))}
    </div>
  );
}