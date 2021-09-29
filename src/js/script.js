const calculate = document.getElementById('calculate');

let name   = document.getElementById('namePacient').value;
let weight = document.getElementById('weightPacient');
let height = document.getElementById('heightPacient');

let result = document.getElementById('result');
let inputs = document.querySelectorAll(".input");


const focusFunx = () => {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
};

let calculateIMC = () => {
  if(namePacient.value !== '' && weightPacient.value !== '' && heightPacient.value !== ''){
    let resultIMC = (parseFloat(weightPacient.value) / parseFloat(heightPacient.value ** 2)).toFixed(1)
    if(resultIMC < 18.5 ){
      const messageReturn = "Magreza"
      result.textContent = `${namePacient.value} seu IMC é de  ${resultIMC}  e você está em situação de  ${messageReturn} Procure um médico para receber ajuda!` 
  }else if (resultIMC >= 18.5 && resultIMC <= 24.9){
      const messageReturn = "Peso Normal"
      result.textContent = `${namePacient.value} seu IMC é de  ${resultIMC}  e você está com seu  ${messageReturn} Procure um médico para receber ajuda!` 
  } else if (resultIMC >= 25.0 && resultIMC <= 29.9){
      const messageReturn = "Acima do peso"
      result.textContent = `${namePacient.value} seu IMC é de " ${resultIMC}  e você está  ${messageReturn} Procure um médico para receber mais orientaçoes!` 
  } else if(resultIMC >= 30.0  && resultIMC <= 34.9){
      const messageReturn = "Obesidade Grau I"
      result.textContent = `${namePacient.value} seu IMC é de  ${resultIMC}  e você está com  ${messageReturn} Procure um médico para receber mais orientaçoes!`
  } else if(resultIMC >= 35.0  && resultIMC <= 39.9){
      const messageReturn ="Obesidade Grau II"
      result.textContent = `${namePacient.value} seu IMC é de  ${resultIMC}  e você está com  ${messageReturn} Procure um médico para receber mais orientaçoes!`
  } else {
      const messageReturn = "Obesidade Grau III"
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
