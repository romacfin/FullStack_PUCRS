var soap = require('soap')
var url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

soap.createClient(url, function (err, client) {
    if(err){
        console.log(err)
    } else {
        client.consultaCEP({
            cep: '71931360'
        }, (err, res) => {
            console.log(res)
        })
    }

//  console.log('DESCREVE -->', client.describe().AtendeClienteService.AtendeClientePort)
});