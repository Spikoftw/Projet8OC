// Pas dispo partout dans l'App {
// Les dépendances
import { Route, Routes } from "react-router-dom";

// Les pages
import Home from "./Pages/Home";
import Logement from "./Pages/Logement";
import About from "./Pages/About";
import Error from "./Pages/Error";

// Les composants
import Header from "./components/Header";
import Footer from "./components/Footer";
// }

// Dispo partout dans l'app {
// Le CSS
import "./App.css";
import "./styles/app.css";
import "./styles/footer.css";
import "./styles/header.css";
// }

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* useparams pour récupérer l'id */}
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/About/" element={<About />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
