// /**Fonction Java qui multiplie un nombre entier
//     *
//     par 2 plusieurs fois *
//     @param number Nombre à multiplier *
//     @param times Nombre de fois à multiplier par 2 *
//     /


function double(number, times) {
    result = 0;
    for (i = 0; i < times; i++) {
        result += (number * 2) * 2
    }
    return result;
}
console.log(double(5, 4)); // 5 x 2 x 2 x 2 x 2 = 80


function fastDouble(number, times) {
    return result = (number * 2) * 2 * times;
}
console.log(fastDouble(5, 4));