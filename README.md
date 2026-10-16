# node-react-test

Proyecto simple de prueba: backend Node.js (Express) + frontend React (Vite), desplegado en Railway.

## Desarrollo local

```bash
npm install
npm run build          # instala y compila el cliente
npm start              # http://localhost:3000
```

Para desarrollo con hot reload: `npm run dev:server` y en otra terminal `npm run dev:client`.

## Endpoints

- `GET /api/health` → estado del servidor
- `GET /api/hello?name=Juan` → saludo
