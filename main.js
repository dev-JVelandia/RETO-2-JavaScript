const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20 },
{ id: 2, nombre: 'Juan', edad: 22 },
{ id: 3, nombre: 'María', edad: 21 },
];

// busqueda de estudiante 2 con id

const busqueda = new Promise ((resolve,reject)=>{
   resolve("Estudiante encontrado: ");
   reject("Estudiante no encontrado...");
   if (estudiantes.id=== 1) {
        resolve(console.log("Nombre: " + estudiantes.nombre + " Edad: " + edad));
    
   } else if (estudiantes.id === 2) {
        (console.log("Nombre: " + estudiantes.nombre + " Edad: " + edad));
    
   } else if (estudiantes.id === 3){

   }
   
});
busqueda.then((v)=>console.log(v+estudiantes.id))