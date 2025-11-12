import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx' //importa a função / "componente" do app.tsx e renderiz logo a baixo pelo nome App

//procura um elemento pelo ID root que esta localizado la no index.html
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
