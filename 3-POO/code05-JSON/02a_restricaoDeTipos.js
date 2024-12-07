//02a_restricaoDeTipos.js
var json = '{ "name":"John Doe", "birth":"2017-11-30T12:00:00.000Z", "city":"Porto Alegre"}'

var obj = JSON.parse(json, function (key, value) {
   if (key == "birth") {
      return new Date(value);
   }
   return value;
});

console.log("Nome:  " + obj.name);
console.log("DNasc: " + obj.birth);

// A conversão não suporta qualquer tipo!
// exemplo: um objeto Date é serializado como String e assim não é desserializado
// automaticamente para Date.
// Deve-se utilizar a função 'reviver'