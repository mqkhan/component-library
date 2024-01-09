export default function Badge({ color, size, icon }) {
  return (
    <div>
      <h1>
        Badge{" "}
        <span className="badge" style={{ color, size }}>
          {icon}
        </span>
      </h1>
    </div>
  );
}
