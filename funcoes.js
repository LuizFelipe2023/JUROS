const verificaNum = (numero) =>{
      return !isNaN(parseFloat(numero)) && isFinite(numero);
}
const jurosSimples = (capital,juros,tempo) =>{
      if(!verificaNum(capital)|| !verificaNum(juros)|| !verificaNum(tempo)){
         throw new Error('Todos os valores devem ser numeros validos');
      }
      return (capital*juros*tempo)/100;
}

const Montante = (capital,juros,tempo) =>{
      if(!verificaNum(capital)|| !verificaNum(juros)|| !verificaNum(tempo)){
         throw new Error('Todos os valores devem ser numeros validos');
      }
      return capital+jurosSimples(capital,juros,tempo);

}

export {jurosSimples,Montante};