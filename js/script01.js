function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var msg = document.getElementById("msg").value;
    var url = "https://wa.me/5596981232405?text=" // Seu numero
      + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*: " + nome + "%0a" // Dados do formulário
      + "*Telefone*: " + telefone + "%0a"
      + "*Sobrenome*: " + sobrenome + "%0a"
      + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
  }