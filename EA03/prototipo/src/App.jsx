import { useState } from 'react'
import { libros as librosIniciales, prestamosIniciales } from './datos'
import Login from './componentes/Login'
import Catalogo from './componentes/Catalogo'
import Prestamos from './componentes/Prestamos'
import Devoluciones from './componentes/Devoluciones'
import MisPrestamos from './componentes/MisPrestamos'
import { usuarios } from './datos'

// Suma dias a la fecha de hoy y la devuelve como texto (aaaa-mm-dd)
function sumarDias(dias) {
  const d = new Date()
  d.setDate(d.getDate() + dias)
  return d.toISOString().slice(0, 10)
}

function App() {
  const [usuario, setUsuario] = useState(null)
  const [vista, setVista] = useState("catalogo")
  const [libros, setLibros] = useState(librosIniciales)
  const [prestamos, setPrestamos] = useState(prestamosIniciales)

  if (!usuario) {
    return <Login alEntrar={setUsuario} />
  }

  // Crea un prestamo nuevo y descuenta el libro del stock
  function registrarPrestamo(libro, lector, dias) {
    const nuevo = {
      id: Date.now(),
      libroId: libro.id,
      titulo: libro.titulo,
      rut: lector.rut,
      nombre: lector.nombre,
      fechaPrestamo: sumarDias(0),
      fechaVencimiento: sumarDias(dias),
      devuelto: false,
    }
    setPrestamos([...prestamos, nuevo])
    setLibros(libros.map(l =>
      l.id === libro.id ? { ...l, disponibles: l.disponibles - 1 } : l
    ))
  }

  // Marca un prestamo como devuelto y devuelve el libro al stock
  function devolver(prestamoId) {
    const prestamo = prestamos.find(p => p.id === prestamoId)
    setPrestamos(prestamos.map(p =>
      p.id === prestamoId ? { ...p, devuelto: true } : p
    ))
    setLibros(libros.map(l =>
      l.id === prestamo.libroId ? { ...l, disponibles: l.disponibles + 1 } : l
    ))
  }

  const esBibliotecario = usuario.rol === "bibliotecario"

  return (
    <div>
      <div className="barra">
        <h1>UNILIB</h1>
        <span>
          {usuario.nombre} ({usuario.rol}){"  "}
          <button onClick={() => setUsuario(null)}>Salir</button>
        </span>
      </div>

      <div className="menu">
        <button className={vista === "catalogo" ? "activo" : ""} onClick={() => setVista("catalogo")}>Catalogo</button>
        {esBibliotecario && (
          <button className={vista === "prestamos" ? "activo" : ""} onClick={() => setVista("prestamos")}>Prestamos</button>
        )}
        {esBibliotecario && (
          <button className={vista === "devoluciones" ? "activo" : ""} onClick={() => setVista("devoluciones")}>Devoluciones</button>
        )}
        {!esBibliotecario && (
          <button className={vista === "misprestamos" ? "activo" : ""} onClick={() => setVista("misprestamos")}>Mis prestamos</button>
        )}
      </div>

      <div className="contenido">
        {vista === "catalogo" && <Catalogo libros={libros} />}
        {vista === "prestamos" && esBibliotecario && (
          <Prestamos libros={libros} usuarios={usuarios} alRegistrar={registrarPrestamo} />
        )}
        {vista === "devoluciones" && esBibliotecario && (
          <Devoluciones prestamos={prestamos} alDevolver={devolver} />
        )}
        {vista === "misprestamos" && !esBibliotecario && (
          <MisPrestamos prestamos={prestamos} usuario={usuario} />
        )}
      </div>
    </div>
  )
}

export default App
