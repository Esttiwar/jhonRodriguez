import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Presentacion from './Components/Presentacion/Presentacion';
import Proyectos from './Components/Proyectos/Proyectos';
import Experiencia from './Components/Experiencia/Experiencia';
import Contacto from './Components/Contacto/Contacto.jsx'
import Footer from './Components/Footer/Footer';
import { Icon } from '@iconify/react';

function App() {
  window.onscroll = function() {
    if (window.scrollY > 600) {
        const $up = document.querySelector(".up");
        $up.style.visibility = "visible";
    
    } else if (window.scrollY < 600) {
        const $up = document.querySelector(".up");
        $up.style.visibility = "hidden";
    }
};
  return (
    <div className='contenedor-padre'>
      <div class="up">
            <a className='up-pc' href="#navbar"><Icon icon="akar-icons:circle-chevron-up-fill" width="40" height="40" /></a>
            <a className='up-mobil' href="#navmenu"><Icon icon="akar-icons:circle-chevron-up-fill" width="40" height="40" /></a>
      </div>
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
