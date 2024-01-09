export default function Card(href, imgAlt, imgSrc) {
  return (
    <>
      <div className="card">
        <img src={imgSrc} alt={imgAlt} />
        <a href={href}>my pic</a>
      </div>
    </>
  );
}
