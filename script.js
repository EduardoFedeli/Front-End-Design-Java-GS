
alert("Bem-vindo ao site!");



function validarFormulario() {
  var nome = document.getElementById('nome').value;
  var telefone = document.getElementById('telefone').value;
  var email = document.getElementById('email').value;
  var mensagem = document.getElementById('mensagem').value;

  if (nome === '' || telefone === '' || email === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
  }
}

function mostrarDataHora() {
  var dataHora = new Date();
  var data = dataHora.toLocaleDateString();
  var hora = dataHora.toLocaleTimeString();
  
  document.getElementById("dataHora").innerHTML = "Data: " + data + "<br>Hora: " + hora;
}

 



$(document).ready(function(){
    $('.carousel').slick();
  });
  



let darkMode = false;


const toggleBtn = document.querySelector('#toggleBtn');


toggleBtn.addEventListener('click', () => {
  
  darkMode = !darkMode;

 
  if (darkMode) {
    document.body.style.backgroundColor = '#1a1a1a';
    document.body.style.color = '#fff';
  } else {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#333';
  }
});









// function validarLogin() {
//   var usuario = document.getElementById("usuario").value;
//   var senha = document.getElementById("senha").value;
  
//   if (usuario === "Admin" && senha === "123456") {
//     document.getElementById("formulario").style.display = "none"; // Oculta o formulário de login
//     document.getElementById("conteudo").style.display = "block"; // Exibe o conteúdo protegido
//     alert('Bem-vindo! Obrigado por visitar nosso site.');
//   } else {
//     alert("Usuário ou senha inválidos!");
//   }
// }
