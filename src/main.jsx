import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Providers from "@context/Providers";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <Routes>

          <Route path="/*" element={<App />} />

        </Routes>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);