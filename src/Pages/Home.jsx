import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Cards";
import logements from "../data/logements.json";
import "../styles/banner.css";
import "../styles/cards.css";
import bannerBkg from "../images/bannerimg.jpeg";

function Home() {
  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" bannerImage={bannerBkg} />

      <div className="cards-main">
        {logements.map((logement, index) => (
          <Link key={index} to={`/logement/${logement.id}`}>
            <Card title={logement.title} image={logement.cover} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
