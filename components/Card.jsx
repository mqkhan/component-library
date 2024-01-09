export default function Card(href, imgAlt, imgSrc) {
  return (
    <>
      <div className="card">
        <img className="cardImag" src={imgSrc} alt={imgAlt} />
        <a href={href}>my pic</a>
      </div>
    </>
  );
}
