
const jurosSimples = (capital,juros,tempo) =>{
      return (capital*juros*tempo)/100;
}

const Montante = (capital,juros,tempo) =>{
      return capital+jurosSimples(capital,juros,tempo);

}

export {jurosSimples,Montante};