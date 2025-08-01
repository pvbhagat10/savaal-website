import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Imgaf from './image.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Imgaf />
  </StrictMode>
);