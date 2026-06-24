// Muestra la lista de libros de la biblioteca
function Catalogo({ libros }) {
  return (
    <div>
      <h2>Catalogo de libros</h2>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Categoria</th>
            <th>Ubicacion</th>
            <th>Disponibles</th>
          </tr>
        </thead>
        <tbody>
          {libros.map(libro => (
            <tr key={libro.id}>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.categoria}</td>
              <td>{libro.ubicacion}</td>
              <td className={libro.disponibles > 0 ? "disponible" : "agotado"}>
                {libro.disponibles} de {libro.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Catalogo
