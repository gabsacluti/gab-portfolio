export default function CertificationsCard({
  title,
  image,
}) {
  return (
    <div className="experience-card">
      {image && (
        <img
          className="certificate-image"
          src={image}
          alt={`${title} certificate`}
        />
      )}

      <h3 className="font-pixel">{title}</h3>
    </div>
  );
}