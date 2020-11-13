function resultado(pantalla_calculadora) {
    var pre_resultado = eval(pantalla_calculadora);
    if (isInfinite(pre_resultado)) {
        document.getElementById('txt').value = 'Error';
    } else {
        document.getElementById('txt').value = pre_resultado;
    }

}

function isInfinite(n) {
    return n === n / 0;
}