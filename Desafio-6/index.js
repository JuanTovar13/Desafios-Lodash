window.onload = function() {
    const personas = [
        { nombre: "Ana", edad: 25 },
        { nombre: "Luis", edad: 22 },
        { nombre: "Juan", edad: 30 }
        ];
    const ordenarPorEdad = _.orderBy(personas, ['edad'], ['asc']);
    console.log(ordenarPorEdad);
        
}