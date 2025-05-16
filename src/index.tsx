import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/HomePage/Home';
import Folio from './Pages/FolioPage/Folio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* ReactDOM.createRoot(root).render( */}
  <BrowserRouter basename="/">
    <Routes>
      <Route index element={<Home />} />
      <Route path="folio" element={<Folio/>} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
{/* ); */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
