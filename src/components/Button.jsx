export default function Button({ size, color, onClick, disabled }) {
  const buttonStyle = {
    color,
    borderRadius: "20px",
    backgroundColor: "grey",
    width: size,
    height: size,
    cursor: disabled ? "not-allowed" : "pointer",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="mb-1">
        <button style={buttonStyle} onClick={onClick}>
          Click
        </button>
      </div>
    </>
  );
}
