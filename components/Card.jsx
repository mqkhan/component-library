export default function Card({ href, imgAlt, imgSrc }) {
  return (
    <>
      <div className="card">
        <img src={imgSrc} alt={imgAlt} width={100} height={100} />
        <a href={href}>my pic</a>
      </div>
    </>
  );
}
