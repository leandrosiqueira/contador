let numero = 0;
const p = document.getElementById('resultado');  

function diminuir() {
  numero--;
  exibir();
}

function aumentar() {
  numero++;
  exibir();
}

function exibir() {
  p.innerText = numero;
}