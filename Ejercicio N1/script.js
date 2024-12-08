import Estudiante from './estudiantes.js';
import Proceso from './procesos.js';

const estudiantes = [
  new Estudiante('Juan', 'Pérez', 20),
  new Estudiante('María', 'Gómez', 22),
  new Estudiante('Carlos', 'López', 21),
  new Estudiante('Ana', 'Rodríguez', 20)
];

const procesos = [
  new Proceso('Matemáticas', 'Asignatura de matemáticas',),
  new Proceso('Lengua', 'Asignatura de lengua'),
  new Proceso('Ciencias', 'Asignatura de ciencias')
];

estudiantes.forEach(estudiante => {
  estudiante.agregarProceso(procesos[0]);
  estudiante.agregarProceso(procesos[1]);
  estudiante.agregarProceso(procesos[2]);
});

const listaEstudiantes = document.getElementById('lista-estudiantes');

estudiantes.forEach(estudiante => {
  const item = document.createElement('li');
  item.textContent = `${estudiante.nombre} ${estudiante.apellido} - Edad: ${estudiante.edad}`;
  listaEstudiantes.appendChild(item);

  const procesosList = document.createElement('ul');
  estudiante.procesos.forEach(proceso => {
    const procesoItem = document.createElement('li');
    procesoItem.textContent = `${proceso.nombre} - ${proceso.descripcion}`;
    procesosList.appendChild(procesoItem);
  });
  item.appendChild(procesosList);
});