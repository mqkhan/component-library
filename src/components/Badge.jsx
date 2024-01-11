export default function Badge({ color, size, icon }) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <h1>Badge </h1>
        <span className="badge" style={{ color, size }}>
          {icon}
        </span>
      </div>
    </>
  );
}
