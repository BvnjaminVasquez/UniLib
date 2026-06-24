// Muestra los prestamos del alumno que inicio sesion
function MisPrestamos({ prestamos, usuario }) {
  const mios = prestamos.filter(p => p.rut === usuario.rut)

  return (
    <div>
      <h2>Mis prestamos</h2>
      {mios.length === 0 && <p>No tienes prestamos registrados.</p>}
      <table>
        <thead>
          <tr>
            <th>Libro</th>
            <th>Fecha prestamo</th>
            <th>Vence</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {mios.map(p => (
            <tr key={p.id}>
              <td>{p.titulo}</td>
              <td>{p.fechaPrestamo}</td>
              <td>{p.fechaVencimiento}</td>
              <td>{p.devuelto ? "Devuelto" : "Prestado"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MisPrestamos
