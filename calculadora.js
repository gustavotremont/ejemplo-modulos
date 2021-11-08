// const suma = (a,b) => a + b;
// const resta = (a,b) => a - b;
// const mult = (a,b) => a * b;
// const div = (a,b) => b != 0 ? a / b : 0;

// const calculadora = {
//     suma:suma,
//     resta:resta,
//     mult:mult,
//     div:div
// }

// // exports.suma = suma;
// // exports.resta = resta;
// // exports.mult = mult;
// // exports.div = div;

// module.exports = calculadora;

module.exports = (a,b) => {
    if(b != 0){
        return a / b;
    }else {
        return "No se puede dividir por 0";
    }
};