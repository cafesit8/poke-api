import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { PokeContextProvider } from './context/PokeContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PokeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PokeContextProvider>
)
