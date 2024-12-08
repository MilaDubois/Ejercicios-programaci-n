class Estudiante {
    constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.procesos = [];
    }
  
    agregarProceso(proceso) {
      this.procesos.push(proceso);
    }
  }
  
  export default Estudiante;