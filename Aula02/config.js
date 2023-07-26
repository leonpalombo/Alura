var numeroSecreto = parseInt(Math.random() * 101) + 1

while (chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 1 e 100')
    if (chute == numeroSecreto){
      alert('Acertou')
    }  else if (chute > numeroSecreto){
      alert('Errou, o número é menor que ' + chute)
    } else if (chute < numeroSecreto){
      alert('Errou, o número é maior que ' + chute)}
}