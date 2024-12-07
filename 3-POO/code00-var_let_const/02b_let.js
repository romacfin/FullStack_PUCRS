//02b_let.js
function testVar(){
    let let01="let01"
    {
        letlet02="let02"
        console.log("01a." + let01)
        console.log("01b." + let02)
    }
    console.log("02a." + let01)
    console.log("02b." + let02)
}
testVar()

// A variável let02 não é acessível fora do bloco de definição
// Haverá erro no comando: console.log(“02b.”+let02)