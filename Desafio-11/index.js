window.onload = function(){
    const lista1 = [1, 2, 3, 4, 5];
    const lista2 = [3, 4, 5, 6, 7];
    const lista3 = [5, 6, 7, 8, 9];
    const listaIntersec = _.intersection(lista1, lista2, lista3);
    console.log(listaIntersec)
}