window.onload = function() {
    const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
    const repeticiones = _.countBy(palabras)
    console.log(repeticiones)
}