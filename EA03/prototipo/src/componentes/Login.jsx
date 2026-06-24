import { useState } from 'react'
import { usuarios } from '../datos'

// Pantalla de inicio de sesion.
// La clave para todos es 1234 (es solo un prototipo).
function Login({ alEntrar }) {
  const [rut, setRut] = useState("")
  const [clave, setClave] = useState("")
  const [error, setError] = useState("")

  function entrar() {
    const usuario = usuarios.find(u => u.rut === rut)
    if (!usuario) {
      setError("El RUT no esta registrado.")
      return
    }
    if (clave !== "1234") {
      setError("La clave es incorrecta.")
      return
    }
    setError("")
    alEntrar(usuario)
  }

  return (
    <div className="login">
      <h2>UNILIB</h2>
      <p>Inicie sesion para continuar</p>
      <input
        placeholder="RUT (ej: 20.555.888-1)"
        value={rut}
        onChange={e => setRut(e.target.value)}
      />
      <input
        type="password"
        placeholder="Clave"
        value={clave}
        onChange={e => setClave(e.target.value)}
      />
      {error && <div className="aviso error">{error}</div>}
      <button className="boton" onClick={entrar}>Entrar</button>
      <p style={{ fontSize: "12px", color: "#666" }}>
        Usuarios de prueba: 20.555.888-1 (alumno) / 18.777.999-5 (bibliotecario). Clave: 1234
      </p>
    </div>
  )
}

export default Login
