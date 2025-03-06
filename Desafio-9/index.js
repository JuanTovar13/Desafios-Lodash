window.onload = function (){
    const persona = { nombre: "Carlos", apellido: "Pérez", edad: 28 };
    const mayusculas = _.mapKeys (persona, (value, key) => _.toUpper(key))
    console.log(mayusculas);
}