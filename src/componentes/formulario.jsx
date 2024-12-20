import  { useState } from 'react';
import "../estilos/FormularioRegistro.css";

const FormularioRegistro = () => {
  // Estados para manejar los valores de cada campo
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState('');
  const [numeroCredito, setNumeroCredito] = useState(''); // Nuevo estado para el número de crédito
  const [docente, setDocente] = useState(''); // Nuevo estado para el docente
  const [mensaje, setMensaje] = useState(''); // Estado para mostrar el mensaje final

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    setMensaje(
      `¡Gracias, ${nombre}!\nTus datos han sido registrados.\nMateria: ${materia}\nFecha: ${fecha}\nNúmero de Crédito: ${numeroCredito}\nDocente: ${docente}`
    );
  };

  return (
    <div className="container">
      <h2 className="title">Registro de Estudiante</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Campo de nombre */}
        <label className="label">
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            className="input"
          />
        </label>

        {/* Campo de correo */}
        <label className="label">
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingresa tu correo"
            className="input"
          />
        </label>

        {/* Campo de carrera */}
        <label className="label">
          Carrera:
          <input
            type="text"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            placeholder="Ingresa tu carrera"
            className="input"
          />
        </label>

        {/* Campo de materia */}
        <label className="label">
          Materia:
          <input
            type="text"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            placeholder="Ingresa la materia"
            className="input"
          />
        </label>

        {/* Campo de fecha */}
        <label className="label">
          Fecha de inscripción:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="input"
          />
        </label>

        {/* Campo número de crédito */}
        <label className="label">
          Número de Crédito:
          <input
            type="number"
            value={numeroCredito}
            onChange={(e) => setNumeroCredito(e.target.value)}
            placeholder="Ingresa el número de crédito"
            className="input"
          />
        </label>

        {/* Campo docente */}
        <label className="label">
          Docente:
          <input
            type="text"
            value={docente}
            onChange={(e) => setDocente(e.target.value)}
            placeholder="Ingresa el nombre del docente"
            className="input"
          />
        </label>

        {/* Botón de envío */}
        <button type="submit" className="button">Registrar</button>
      </form>

      {/* Mensaje de confirmación */}
      {mensaje && (
        <div className="message">
          {mensaje}
        </div>
      )}
    </div>
  );
};

export default FormularioRegistro;
