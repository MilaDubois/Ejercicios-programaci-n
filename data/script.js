import API from './api.js';

const api = new API();

document.addEventListener('DOMContentLoaded', () => {
  api.obtenerDatos()
    .then(datos => {
      const listaDatos = document.getElementById('lista-datos');
      datos.forEach(dato => {
        const li = document.createElement('li');
        li.textContent = dato.title;
        listaDatos.appendChild(li);
      });
    })
    .catch(error => {
      console.error(error);
    });
});