import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App.css";
import Home from './paginas/Home';
import Java from './paginas/Java';
import Python from './paginas/Python';
import JavaScript from './paginas/JavaScript';
import C1 from './paginas/C1';
import C2 from './paginas/C2';
import Sql from './paginas/Sql';
import Html from './paginas/Html';
import Contacto from './paginas/Contacto';
import Credito from './paginas/Credito';

const router = createBrowserRouter([
  {
    path:"/ProyectoFinal",
    element: <Home></Home>,
  },
  {
    path:"/Java",
    element: <Java></Java>,
  },
  {
    path:"/Python",
    element: <Python></Python>,
  },
  {
    path:"/JavaScript",
    element: <JavaScript></JavaScript>,
  },
  {
    path:"/C1",
    element: <C1></C1>,
  },
  {
    path:"/C2",
    element: <C2></C2>,
  },
  {
    path:"/Sql",
    element: <Sql></Sql>,
  },
  {
    path:"/Html",
    element: <Html></Html>,
  },
  {
    path:"/Contacto",
    element: <Contacto></Contacto>,
  },
  {
    path:"/Credito",
    element: <Credito></Credito>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
