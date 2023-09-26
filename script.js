const url = 'https://api.npoint.io/bb86c1103e7e7b4e711e';
const lista = document.querySelector("#lista");
const body = document.body;
const boton = document.getElementById("cambio");

document.addEventListener('DOMContentLoaded', function () {

    fetch(url)
        .then(response => {

            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(element => {
                const persona = document.createElement("li");
                persona.textContent = `Nombre: ${element.name}, Teléfono: ${element.phone}, País: ${element.country}`;
                lista.appendChild(persona);
            });

            console.log(data); /* Aca se trabajan los datos, agregamos a una lista con li */
        })
        .catch(error => {
            console.error('Error:', error);
        });   

const savedMode = localStorage.getItem('mode');

 if (savedMode === 'modo-noche') {
 body.classList.add('modo-noche');
} else {
body.classList.add('modo-dia'); 
 }

boton.addEventListener('click',() => {
    body.classList.toggle('modo-dia');
    body.classList.toggle('modo-noche');
    const currentMode = body.classList.contains('modo-noche') ? 'modo-noche' : 'modo-dia';
    localStorage.setItem('mode', currentMode);
})

buscador.addEventListener('input', () => {
    const textoBusqueda = buscador.value.trim().toLowerCase(); 
 
    lista.querySelectorAll('li').forEach(persona => {
      const datosPersona = persona.textContent.toLowerCase(); 
      
      if (datosPersona.includes(textoBusqueda)) {
        persona.style.display = 'block'; 
      } else {
        persona.style.display = 'none'; 
      }       
 });
  });    
});
