//02c_let.js
function testVar(){
    letlet01 = "let01"
    {
        console.log("01a."+let01)
        letlet01="let02"
        console.log("02a."+let01)
    }
    console.log("03a."+let01)
}
testVar()

// A redefinição da variável let01 não é suportada
// Haverá erro no comando: console.log("01a."+let01)
// A variável let01 causará conflito pois pode ser a primeira ou a segunda declaração