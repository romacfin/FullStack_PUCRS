var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url, function (err, client) {
  console.log('Descreve -> ', client.describe().Calculator.CalculatorSoap)
});

soap.createClient(url, function(err, client) {
    client.Add({ intA: 2, intB: 3}, function (err, result) {
        if(err) return console.log(err);
        console.log("SOMA: ", result.AddResult);
    });
    client.Divide({ intA: 10, intB: 4}, function(err, result) {
        if(err) return console.log(err);
        console.log("DIVISÃO: ", result.DivideResult);
    });
    client.Multiply({ intA: 2, intB:3}, function(err, result) {
        if(err) return console.log(err);
        console.log("MULTIPLICAÇÃO: ", result.MultiplyResult);
    });
    client.Subtract({ intA: 7, intB:9}, function(err, result) {
        if(err) return console.log(err);
        console.log("SUBTRAÇÃO: ", result.SubtractResult);
    });
    console.log("conteudo SOAP", client.lastRequest)
    console.log("DESCRIBE -->  ", client.describe().Calculator.CalculatorSoap);
});
