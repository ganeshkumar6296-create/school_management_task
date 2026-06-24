function DashboardCard({
  title,
  value,
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        width: "220px",
        borderRadius: "10px",
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
}

export default DashboardCard;