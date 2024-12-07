//03a_const.js
function testConst(){
    const const01 = "const01"
    {
        const const02 = "const02"
        console.log("01a." + const01)
        console.log("01b." + const02)
    }
    const01 = "novo valor"
    console.log("02a." + const01)
    console.log("02b." + const02)
}

testConst()

// const01 não pode receber novo valor - Haverá erro no comando: const01 = “novo valor”
// const02 não é acessível fora do bloco - Haverá erro no comando: console.log(“02b.” + let02)