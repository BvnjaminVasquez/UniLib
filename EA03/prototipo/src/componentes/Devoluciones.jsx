import { MULTA_POR_DIA } from '../datos'

// Calcula cuantos dias de atraso tiene un prestamo
function diasAtraso(fechaVencimiento) {
  const hoy = new Date()
  const vence = new Date(fechaVencimiento)
  const diff = Math.floor((hoy - vence) / (1000 * 60 * 60 * 24))
  return diff > 0 ? diff : 0
}

// Lista los prestamos activos y permite registrar la devolucion
function Devoluciones({ prestamos, alDevolver }) {
  const activos = prestamos.filter(p => !p.devuelto)

  function devolver(prestamo) {
    const dias = diasAtraso(prestamo.fechaVencimiento)
    const multa = dias * MULTA_POR_DIA
    if (multa > 0) {
      alert("Libro devuelto con " + dias + " dias de atraso. Multa: $" + multa)
    } else {
      alert("Libro devuelto a tiempo. Sin multa.")
    }
    alDevolver(prestamo.id)
  }

  return (
    <div>
      <h2>Devoluciones</h2>
      {activos.length === 0 && <p>No hay prestamos activos.</p>}
      <table>
        <thead>
          <tr>
            <th>Libro</th>
            <th>Usuario</th>
            <th>Vence</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {activos.map(p => {
            const atraso = diasAtraso(p.fechaVencimiento)
            return (
              <tr key={p.id}>
                <td>{p.titulo}</td>
                <td>{p.nombre}</td>
                <td>{p.fechaVencimiento}</td>
                <td className={atraso > 0 ? "agotado" : "disponible"}>
                  {atraso > 0 ? "Atrasado " + atraso + " dias" : "A tiempo"}
                </td>
                <td>
                  <button className="boton" onClick={() => devolver(p)}>Devolver</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Devoluciones
