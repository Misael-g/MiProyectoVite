import './estilos/App.css';

import Datospersonales from './componentes/Datospersonales.jsx';
import Deportesfavoritos from './componentes/Deportesfavoritos.jsx';
import EstudiosRealizados from './componentes/EstudiosRealizados.jsx';
import FormularioRegistro from './componentes/formulario.jsx';
import Herramientasutilizadas from './componentes/Herramientasutilizadas.jsx';


function App() {


  return (
    <>
      <Datospersonales />
      <EstudiosRealizados />
      <Herramientasutilizadas />
      <Deportesfavoritos />
      <FormularioRegistro />
      
    </>
  );
}

export default App;
