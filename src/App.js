import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Presentacion from './Components/Presentacion/Presentacion';
import Proyectos from './Components/Proyectos/Proyectos';
import Experiencia from './Components/Experiencia/Experiencia';
import Contacto from './Components/Contacto/Contacto.jsx'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Presentacion />
      <Proyectos />
      <Experiencia />
      <Contacto />
      <Footer />
    </div>
    
  );
}

export default App;
