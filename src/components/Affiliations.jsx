import AffiliationsCard from "./AffiliationsCard.jsx";

export default function Affiliations() {
  return (
    <section id="affiliations">
      <h2 className="font-pixel">affiliations</h2>

      <AffiliationsCard
        name="Positive Hack Camp 2025"
        description="I am part of the Positive Hack Camp 2025 community by Positive Technologies."
        image="/images/PHCphoto.jpg"
      />
    </section>
  );
}