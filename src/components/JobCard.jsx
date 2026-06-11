import "./JobCard.css";

export function JobCard({ job, deleteJob, updateStatus }) {
  return (
    <div className="job-card">
      <div className="job-info">
        <div className="job-header">
          <h3>
            {job.company
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h3>

          <span
            className={`status-badge ${job.status
              .toLowerCase()
              .replace(" ", "")}`}
          >
            {job.status}
          </span>
        </div>

        <p className="job-role">{job.role}</p>

        <p className="job-date">Added: {job.dateAdded}</p>
      </div>

      <div className="job-actions">
        <select
          value={job.status}
          onChange={(event) => updateStatus(job.id, event.target.value)}
        >
          <option>Applied</option>
          <option>OA</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>

        <button onClick={() => deleteJob(job.id)}>Delete</button>
      </div>
    </div>
  );
}
