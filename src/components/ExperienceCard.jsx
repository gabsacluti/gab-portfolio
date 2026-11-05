export default function ExperienceCard({
  title,
  organization,
  location,
  startMonth,
  startYear,
  descriptions = []
}) {
  return (
    <div className="experience-card">
      <h3 className="font-pixel">{title}</h3>
      <p>{organization}</p>
      <p>{location}</p>
      <p>{startMonth} {startYear}</p>

      <ul>
        {descriptions.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
}