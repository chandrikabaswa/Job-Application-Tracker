import './DashboardStats.css';
export function DashboardStats({ jobs }) {
  const applied = jobs.filter(
    (job) => job.status === 'Applied'
  ).length;

  const oa = jobs.filter(
    (job) => job.status === 'OA'
  ).length;

  const interview = jobs.filter(
    (job) => job.status === 'Interview'
  ).length;

  const rejected = jobs.filter(
    (job) => job.status === 'Rejected'
  ).length;

  const offer = jobs.filter(
    (job) => job.status === 'Offer'
  ).length;

  return (
    <>
      <h2>Statistics</h2>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total</h3>
          <p>{jobs.length}</p>
        </div>

        <div className="stat-card">
          <h3>Applied</h3>
          <p>{applied}</p>
        </div>

        <div className="stat-card">
          <h3>OA</h3>
          <p>{oa}</p>
        </div>

        <div className="stat-card">
          <h3>Interview</h3>
          <p>{interview}</p>
        </div>

        <div className="stat-card">
          <h3>Rejected</h3>
          <p>{rejected}</p>
        </div>

        <div className="stat-card">
          <h3>Offer</h3>
          <p>{offer}</p>
        </div>
      </div>
    </>
  );
}