class API {
    obtenerDatos() {
      return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(datos => datos)
        .catch(error => {
          throw error;
        });
    }
  }
  
  export default API;