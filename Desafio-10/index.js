window.onload = function (){
    const anidado = [1, [2, [3, [4, 5]]], 6];
    console.log(anidado)
    const anidadoProfundo = _.flattenDeep(anidado);
    console.log(anidadoProfundo)
}