/** Dicionários armazenam a informação a partir de um par - Chave + Valor - (Chave, Valor)*/

const myMap = new Map()
myMap.set(0, 'ZERO')
myMap.set(1, 'UM')
myMap.set(2, 'DOIS')
console.log(myMap)

for (const [key, value] of myMap) {
    console.log(key + ' = ' + value)
}

for (const key of myMap.keys()) {
    console.log(key)
}

for (const value of myMap.values()) {
    console.log(value)
}

for (const [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value)
}