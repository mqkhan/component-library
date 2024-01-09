export default function Button({ size, color, onClick, disabled }) {
  return (
    <div>
      <button
        className="font-bold"
        style={{
          color,
          borderRadius: "20px",
          backgroundColor: "grey",
          width: size,
          height: size,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        onClick={onClick}
      >
        Click
      </button>
    </div>
  );
}
