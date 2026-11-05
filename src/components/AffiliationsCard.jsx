export default function AffiliationsCard({
  name,
  description,
  image,
}) {
  return (
    <div className="experience-card affiliation-card">
      {image && (
        <img
          className="affiliation-image"
          src={image}
          alt={`${name} community`}
        />
      )}

      <div className="affiliation-text">
        <h3 className="font-pixel">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}