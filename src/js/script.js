const calculate = document.getElementById('calculate');

const name = document.getElementById('namePacient');
const weight = document.getElementById('weightPacient');
const height = document.getElementById('heightPacient');

const result = document.getElementById('result');
const inputs = document.querySelectorAll(".input");

const focusFunx = () => {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
};

const calculateIMC = () => {
  if(namePacient !== '' && weightPacient.value !== '' && heightPacient.value !== ''){
    const resultIMC = (parseFloat(weightPacient.value) / parseFloat(heightPacient.value ** 2) ).toFixed(1)
    if(resultIMC < 18.5 ){
      const messageReturn = "magreza"
      result.textContent = "Seu IMC é" + resultIMC
      result.textContent = "Você está em situação de " + messageReturn
  }else if (resultIMC >= 18.5 && resultIMC <= 24.9){
      const messageReturn = "Peso Normal"
      result.textContent = "Seu IMC é" + resultIMC
      result.textContent = "Você está com o seu " + messageReturn
  } else if (resultIMC >= 25.0 && resultIMC <= 29.9){
      const messageReturn = "Acima do peso"
      result.textContent = "Seu IMC é" + resultIMC
      result.textContent = "Você está " + messageReturn
      result.textContent = "Consulte um médico mais proximo para receber mais orientaçoes"
  } else if(resultIMC >= 30.0  && resultIMC <= 34.9){
      const messageReturn = "Obesidade Grau I"
      result.textContent = "Seu IMC é" + resultIMC
      result.textContent = "Você está diagnosticada com " + messageReturn
      result.textContent = "Consulte um médico urgente!" 
  } else if(resultIMC >= 35.0  && resultIMC <= 39.9){
      const messageReturn ="Obesidade Grau II"
      result.textContent = "Seu IMC é" + resultIMC
      result.textContent = "Você está diagnosticada com " + messageReturn
      result.textContent = "Consulte um médico urgente!" 
  } else {
      const messageReturn = "Obesidade Grau III"
      result.textContent = "Seu IMC é" + resultIMC
      result.textContent = "Você está diagnosticada com " + messageReturn
      result.textContent = "Consulte um médico urgente!" 
  }
  }else{
    alert('Preencha todos os campos para que o calculo possa ser feito.')
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunx);
});

calculate.addEventListener("click", calculateIMC)
