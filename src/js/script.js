const calculate = document.getElementById('calculate');

const name   = document.getElementById('namePacient').value;
const weight = document.getElementById('weightPacient');
const height = document.getElementById('heightPacient');

let result = document.getElementById('result');
let inputs = document.querySelectorAll(".input");

/* Mask for input */
$(document).ready(function() {
  $('.weight').mask("#00.0", {reverse: true});
}) 

$(document).ready(function() {
  $('.height').mask("#0.00", {reverse: true});
}) 


const clearText = () => {
  document.getElementById('namePacient').value = "";
  document.getElementById('weightPacient').value = "";
  document.getElementById('heightPacient').value = "";
  document.getElementById('result').value = "";
}

const focusFunx = () => {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
};

let calculateIMC = () => {
  if(namePacient.value !== '' && weightPacient.value !== '' && heightPacient.value !== ''){
    let resultIMC = (parseFloat(weightPacient.value) / parseFloat(heightPacient.value ** 2)).toFixed(1)
    if(resultIMC < 18.5 ){
      const messageReturn = "magreza"
      result.textContent = `${namePacient.value} seu IMC é de  ${resultIMC} e você está em situação de ${messageReturn}. Procure um médico para receber mais orientaçoes!`
  }else if (resultIMC >= 18.5 && resultIMC <= 24.9){
      const messageReturn = "peso ideal"
      result.textContent = `${namePacient.value} seu IMC é de  ${resultIMC}  e você está com seu ${messageReturn}` 
  } else if (resultIMC >= 25.0 && resultIMC <= 29.9){
      const messageReturn = "acima do peso"
      result.textContent = `${namePacient.value} seu IMC é de ${resultIMC}  e você está  ${messageReturn} Procure um médico para receber mais orientaçoes!` 
  } else if(resultIMC >= 30.0  && resultIMC <= 34.9){
      const messageReturn = "obesidade grau I"
      result.textContent = `${namePacient.value} seu IMC é de  ${resultIMC}  e você está com  ${messageReturn} Procure um médico para receber mais orientaçoes!`
  } else if(resultIMC >= 35.0  && resultIMC <= 39.9){
      const messageReturn ="obesidade grau II"
      result.textContent = `${namePacient.value} seu IMC é de  ${resultIMC}  e você está com  ${messageReturn} Procure um médico para receber mais orientaçoes!`
  } else {
      const messageReturn = "obesidade grau III"
      result.textContent = `${namePacient} seu IMC é de  ${resultIMC}  e você está com  ${messageReturn} Procure um médico urgentemente para receber mais orientaçoes!`
  }
  }else{
    alert('Preencha todos os campos para que o calculo possa ser feito.')
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunx);
});

calculate.addEventListener("click", calculateIMC)
