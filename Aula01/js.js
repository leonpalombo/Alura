var nome=prompt('Digite seu nome')
var dolarValue=prompt('Digite o valor')
var dolarQuotation = 5.12;

var realValue = dolarValue * dolarQuotation;
realValue = realValue.toFixed(2);
alert("Olá " + nome + ", o valor em real é" + " R$ " +realValue);
alert( "R$ " +realValue);


