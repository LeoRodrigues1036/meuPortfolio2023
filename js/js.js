
document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado normalmente
  
  // Coleta os valores do formulário
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;
  
  // Configuração do objeto XMLHttpRequest para enviar a requisição
  var xhr = new XMLHttpRequest();
  var url = "enviar_email.php"; // Arquivo PHP responsável pelo processamento
  
  // Configuração da requisição
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  // Preparação dos dados a serem enviados
  var data = "nome=" + encodeURIComponent(nome) +
             "&email=" + encodeURIComponent(email) +
             "&mensagem=" + encodeURIComponent(mensagem);
  
  // Envio da requisição
  xhr.send(data);
  
  // Manipulação da resposta do servidor
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Mensagem enviada com sucesso!");
        // Faça aqui qualquer ação adicional após o envio bem-sucedido
      } else {
        console.log("Erro ao enviar a mensagem.");
        // Faça aqui qualquer ação adicional em caso de erro no envio
      }
    }
  };
});
