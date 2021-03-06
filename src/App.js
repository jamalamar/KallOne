import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Inicio from './Views/Inicio'
import Productos from './Views/Productos'
import QuienesSomos from './Views/QuienesSomos'
import Contacto from './Views/Contacto'
import Climatizacion from './Views/Climatizacion'
import Vehiculos from './Views/Vehiculos'

import NavBar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {

  return (
    <Router>
      <div >

        <NavBar/>
      
              <Route path="/" exact component={Inicio} />
              <Route path="/Productos" component={Productos} />
              <Route path="/QuienesSomos" component={QuienesSomos} />
              <Route path="/Contacto" component={Contacto} />
              <Route path="/Climatización" component={Climatizacion} />
              <Route path="/Vehículos" component={Vehiculos} />
      
              <Footer />

      </div>
    </Router>
  );
}

export default App;
