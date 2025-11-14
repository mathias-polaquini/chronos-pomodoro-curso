import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';


//procura um elemento pelo ID root que esta localizado la no index.html
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>

  </StrictMode>,
)
