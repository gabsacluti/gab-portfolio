import RecommendationsCard from "./RecommendationsCard";

export default function Recommendations() {
    return (
        <div>
            <h2 className="font-pixel">What people say about Gabrielle</h2>
            <RecommendationsCard
            person="Random Guy"
            comment="This guy is goated as fuck"/>
        </div>
    );
}