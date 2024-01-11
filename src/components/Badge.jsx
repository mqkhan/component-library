import "./Badge.css";
export default function Badge({ color, size, icon }) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <h1>Badge </h1>
        <div className={`badge ${color} ${size}`}>{icon}</div>
      </div>
    </>
  );
}
