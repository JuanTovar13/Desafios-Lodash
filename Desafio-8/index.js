window.onload = function () {
    
    const n = 3; const elementos = ["a", "b", "c", "d", "e", "f", "g", "h"];

    const agrupar = _.chunk(elementos, n);
    console.log(agrupar);

}