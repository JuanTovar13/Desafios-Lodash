window.onload = function() {
    let valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];
    const valoresFiltrados =  _.compact(valores);
    console.log(valoresFiltrados);
}