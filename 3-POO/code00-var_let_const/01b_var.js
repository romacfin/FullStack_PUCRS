//01b_var.js
function testVar(){
    var var01 = "var 01"
    if(1==0){                     // condição perpetuamente falsa
        var var02 = "var 02"
        console.log("01a." + var01)
        console.log("01b." + var02)
    }
    console.log("02a." + var01)
    console.log("02b." + var02)
}

testVar()

// a variável 02b será impressa como undefined pois está declarada porém sem definição.