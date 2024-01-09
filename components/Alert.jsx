export default function Alert({ color, icon }) {
  return (
    <>
      <div style={{ color }} className="flex gap-3 items-center">
        <span>{icon}</span>
        <span>
          <strong>Info alert!</strong> Change a few things up and try submitting
          again.
        </span>
      </div>
    </>
  );
}
