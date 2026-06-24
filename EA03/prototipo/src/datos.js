// Datos de ejemplo para el prototipo UNILIB
// (en el proyecto final esto vendria desde la base de datos)

export const libros = [
  { id: 1, titulo: "Cien Anos de Soledad", autor: "Gabriel Garcia Marquez", isbn: "978-849759", categoria: "Novela", total: 4, disponibles: 2, ubicacion: "Pasillo A - Estante 3" },
  { id: 2, titulo: "El Quijote", autor: "Miguel de Cervantes", isbn: "978-844920", categoria: "Clasico", total: 3, disponibles: 0, ubicacion: "Pasillo A - Estante 1" },
  { id: 3, titulo: "Calculo de una Variable", autor: "James Stewart", isbn: "978-607481", categoria: "Matematicas", total: 6, disponibles: 5, ubicacion: "Pasillo C - Estante 2" },
  { id: 4, titulo: "Introduccion a los Algoritmos", autor: "Thomas Cormen", isbn: "978-026203", categoria: "Informatica", total: 5, disponibles: 3, ubicacion: "Pasillo C - Estante 4" },
  { id: 5, titulo: "Fisica Universitaria", autor: "Sears Zemansky", isbn: "978-607442", categoria: "Fisica", total: 4, disponibles: 1, ubicacion: "Pasillo B - Estante 2" },
  { id: 6, titulo: "Clean Code", autor: "Robert C. Martin", isbn: "978-013235", categoria: "Informatica", total: 2, disponibles: 2, ubicacion: "Pasillo C - Estante 4" },
]

export const usuarios = [
  { rut: "21.111.222-3", nombre: "Catalina Rojas", rol: "alumno", moroso: true },
  { rut: "20.555.888-1", nombre: "Diego Soto", rol: "alumno", moroso: false },
  { rut: "15.333.444-K", nombre: "Profesora Ana Lillo", rol: "docente", moroso: false },
  { rut: "18.777.999-5", nombre: "Benjamin Vazquez", rol: "bibliotecario", moroso: false },
]

// Valor que se cobra por cada dia de atraso en una devolucion
export const MULTA_POR_DIA = 200

// Devuelve una fecha (texto) sumando dias a la fecha de hoy
function fecha(dias) {
  const d = new Date()
  d.setDate(d.getDate() + dias)
  return d.toISOString().slice(0, 10)
}

// Prestamos que ya existen al abrir el sistema.
// El primero esta atrasado para poder probar el calculo de multa.
export const prestamosIniciales = [
  { id: 1, libroId: 1, titulo: "Cien Anos de Soledad", rut: "20.555.888-1", nombre: "Diego Soto", fechaPrestamo: fecha(-5), fechaVencimiento: fecha(-2), devuelto: false },
  { id: 2, libroId: 3, titulo: "Calculo de una Variable", rut: "15.333.444-K", nombre: "Profesora Ana Lillo", fechaPrestamo: fecha(-1), fechaVencimiento: fecha(6), devuelto: false },
]
