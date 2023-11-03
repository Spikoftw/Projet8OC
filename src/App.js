import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Logement from './Pages/Logement'
import About from './Pages/About';
import Error from './Pages/Error'
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/app.css'
import './styles/footer.css'
import './styles/header.css'


function App() {
  return (
    <div className="App">
      <div className='App__wrapper'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* useparams pour récupérer l'id */}
            <Route path='/logement/:id' element={<Logement />} />
            <Route path='/About/' element={<About />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;