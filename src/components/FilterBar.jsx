import './FilterBar.css';

export function FilterBar({
  filterStatus,
  setFilterStatus
}) {
  return (
    <select
      className="filter-select"
      value={filterStatus}
      onChange={(event) =>
        setFilterStatus(event.target.value)
      }
    >
      <option value="All">
        All Statuses
      </option>

      <option value="Applied">
        Applied
      </option>

      <option value="OA">
        OA
      </option>

      <option value="Interview">
        Interview
      </option>

      <option value="Rejected">
        Rejected
      </option>

      <option value="Offer">
        Offer
      </option>
    </select>
  );
}