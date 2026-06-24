import { useState } from 'react'

// Registrar un prestamo nuevo (lo usa el bibliotecario)
function Prestamos({ libros, usuarios, alRegistrar }) {
  const [libroId, setLibroId] = useState("")
  const [rut, setRut] = useState("")
  const [aviso, setAviso] = useState(null)

  // solo alumnos y docentes pueden pedir libros
  const lectores = usuarios.filter(u => u.rol === "alumno" || u.rol === "docente")
  const disponibles = libros.filter(l => l.disponibles > 0)

  function registrar() {
    if (!libroId || !rut) {
      setAviso({ tipo: "error", texto: "Debe elegir un libro y un usuario." })
      return
    }
    const usuario = usuarios.find(u => u.rut === rut)
    // no se presta a usuarios morosos
    if (usuario.moroso) {
      setAviso({ tipo: "error", texto: usuario.nombre + " tiene multas pendientes, no se puede prestar." })
      return
    }
    const libro = libros.find(l => l.id === Number(libroId))
    // los alumnos tienen 3 dias y los docentes 7
    const dias = usuario.rol === "docente" ? 7 : 3
    alRegistrar(libro, usuario, dias)
    setAviso({ tipo: "ok", texto: "Prestamo registrado. Vence en " + dias + " dias." })
    setLibroId("")
    setRut("")
  }

  return (
    <div className="tarjeta">
      <h2>Registrar prestamo</h2>

      <label>Libro</label>
      <select value={libroId} onChange={e => setLibroId(e.target.value)}>
        <option value="">-- Seleccione un libro --</option>
        {disponibles.map(l => (
          <option key={l.id} value={l.id}>{l.titulo} ({l.disponibles} disp.)</option>
        ))}
      </select>

      <label>Usuario</label>
      <select value={rut} onChange={e => setRut(e.target.value)}>
        <option value="">-- Seleccione un usuario --</option>
        {lectores.map(u => (
          <option key={u.rut} value={u.rut}>{u.nombre} - {u.rut}</option>
        ))}
      </select>

      {aviso && <div className={"aviso " + aviso.tipo}>{aviso.texto}</div>}
      <button className="boton" onClick={registrar}>Registrar prestamo</button>
    </div>
  )
}

export default Prestamos
