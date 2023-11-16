// Dépendances
import { useParams } from "react-router-dom";

// Composants
import Carousel from "../components/Carousel";
import TagList from "../components/TagList";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Error from "./Error";

// Datas
import logements from "../data/logements.json";

// CSS
import "../styles/logement.css";

function Logement() {
  const { id } = useParams();

  const logementFound = logements.find(
    (logement) => logement.id.trim().toLowerCase() === id.trim().toLowerCase()
  );

  if (!logementFound) {
    return <Error />;
  }

  const {
    title,
    location,
    tags,
    rating,
    host,
    pictures,
    description,
    equipments,
  } = logementFound;

  return (
    <section className="logement">
      <Carousel pictures={pictures} />
      <div className="logement__infos">
        <div className="logement__infos-left">
          <h1>{title}</h1>
          <h2>{location}</h2>
          <TagList tags={tags} />
        </div>

        <div className="logement__infos-right">
          <Host name={host.name} picture={host.picture} />
          <Rating rate={rating} />
        </div>
      </div>

      <div className="logement__collapse">
        <Collapse title="Description" content={description} />
        <Collapse
          title="Equipements"
          content={equipments.map((part, index) => (
            <span key={index}>
              {part} <br />
            </span>
          ))}
        />
      </div>
    </section>
  );
}

export default Logement;
