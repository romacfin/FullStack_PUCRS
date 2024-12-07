// 05e_arrayReduce
// fazer uma consulta de valores no array de acordo com o parâmetro definido

array = [4,5,6,7,8,9,10]
let resultado=
    array.reduce(
        (acc,val) => acc += (val%2 == 0)?val:0,
        0
    )
console.log("A soma dos nros pares é " + resultado)