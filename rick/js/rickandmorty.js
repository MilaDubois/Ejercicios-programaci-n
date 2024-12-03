 const fila = document.getElementById("list")

 function crearCarta (personaje) {
   const columna = document.createElement("div")
   const primaryCard = `<div class="card">
     <div class="row g-0">
       <div class="col-md-4">
         <img src="${personaje?.image}" class="img-fluid rounded-start" alt="${personaje?.name}">
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">${personaje?.name}</h5>
           <p class="card-text tipodeespecie"><b>Especie:</b> ${personaje?.species}</p>
           <p class="card-text estadopersonaje"><b>Estado:</b>  ${personaje?.status}</p>
           <p class="card-text generopersonaje"><b>Género:</b> ${personaje?.gender}</p>
         </div>
       </div>
     </div>
   </div>`
   columna.className = "col-12 col-sm-6 col-md-4"
   columna.innerHTML = primaryCard
   fila.appendChild(columna)
 }


 fetch('https://rickandmortyapi.com/api/character')
   .then((res) => {
     return res.json()
   })
   .then((json) => {
     json.results.forEach((personaje) => {
         crearCarta(personaje)
     })
   })