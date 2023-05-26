<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $mensagem = $_POST["mensagem"];
  
  // Configurar o e-mail de destino
  $para = "leorodrigues1036@gmail.com";
  
  // Configurar o assunto do e-mail
  $assunto = "Nova mensagem do formulário de contato";
  
  // Configurar o corpo do e-mail
  $corpo = "Nome: " . $nome . "\n";
  $corpo .= "E-mail: " . $email . "\n";
  $corpo .= "Mensagem: " . $mensagem;
  
  // Enviar o e-mail
  if (mail($para, $assunto, $corpo)) {
    echo "Mensagem enviada com sucesso!";
  } else {
    echo "Erro ao enviar a mensagem.";
  }
}
?>
