import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/NavBar.jsx'
import App from './App.jsx'
import { BrowserRouter as Router} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <App />
    </Router>
  </StrictMode>,
)
