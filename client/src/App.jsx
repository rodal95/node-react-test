import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [health, setHealth] = useState(null)

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setHealth({ status: 'error' }))
  }, [])

  const saludar = async (e) => {
    e.preventDefault()
    const r = await fetch(`/api/hello?name=${encodeURIComponent(name || 'mundo')}`)
    const data = await r.json()
    setMessage(data.message)
  }

  return (
    <main className="app">
      <h1>Node.js + React en Railway</h1>
      <p>
        Estado del backend:{' '}
        <strong>{health ? health.status : 'consultando...'}</strong>
      </p>
      <form onSubmit={saludar}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
        />
        <button type="submit">Saludar</button>
      </form>
      {message && <p className="message">{message}</p>}
    </main>
  )
}

export default App
