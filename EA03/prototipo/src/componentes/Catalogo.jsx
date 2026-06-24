import { useState } from 'react'

// Muestra la lista de libros de la biblioteca
function Catalogo({ libros }) {
  const [busqueda, setBusqueda] = useState("")

  // filtra los libros por titulo o autor segun lo que se escribe
  const texto = busqueda.toLowerCase()
  const filtrados = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(texto) ||
    libro.autor.toLowerCase().includes(texto)
  )

  return (
    <div>
      <h2>Catalogo de libros</h2>

      <input
        placeholder="Buscar por titulo o autor..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />

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
          {filtrados.map(libro => (
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
          {filtrados.length === 0 && (
            <tr><td colSpan="5">No se encontraron libros.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Catalogo
