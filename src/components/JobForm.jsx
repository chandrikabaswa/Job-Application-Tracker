import { useState } from "react";
import './JobForm.css';

export function JobForm({ addJob }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  function handleSubmit(event) {
    event.preventDefault();

    if (!company.trim() || !role.trim()) {
      return;
    }

    addJob({
      company,
      role,
      status,
    });

    setCompany("");
    setRole("");
    setStatus("Applied");
  }

  return (
    <div className="job-form">
      <h2>Add Application</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Google"
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. SDE Intern"
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>Applied</option>
              <option>OA</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Offer</option>
            </select>
          </div>
        </div>

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}
