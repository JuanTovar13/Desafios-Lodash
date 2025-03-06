window.onload = function (){
    const clave = "curso";
    const estudiantes = [
  { nombre: "Mario", curso: "Matemáticas" },
  { nombre: "Lucía", curso: "Historia" },
  { nombre: "Juan", curso: "Matemáticas" },
  { nombre: "Elena", curso: "Historia" }
];
    const agrupar = _.groupBy (estudiantes, clave);
    console.log(agrupar)

}