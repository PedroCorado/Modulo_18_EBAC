
function calcularMedia(numeros) {
    if (numeros.length === 0) {
      return 0; 
    }
  
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
  
    const media = soma / numeros.length;
    return media;
  }
  

  const listaDeNumeros = [12, 34, 56, 78, 90];
  const resultado = calcularMedia(listaDeNumeros);
  console.log("A média dos números é:", resultado);
  