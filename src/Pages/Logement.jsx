import Carousel from "../components/Carousel";
import "../styles/logement.css";
import logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import TagList from "../components/TagList";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

function Logement() {
  const { id } = useParams();

  // find pour rechercher le logement correspondant par ID (en tant que chaîne normalisée)
  const logementFound = logements.find(
    (logement) => logement.id.trim().toLowerCase() === id.trim().toLowerCase()
  );

  if (!logementFound) {
    window.location = "/404";
    return;
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

  console.log("logementFound =>", logementFound);

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
          content={equipments.map((part) => (
            <span>
              {part} <br />
            </span>
          ))}
        />
      </div>
    </section>
  );
}

export default Logement;
