// Captura o formulário de login pelo ID
const loginForm = document.querySelector(".caixaLogin");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Captura os valores digitados nos campos
  const usuarioEmail = document.querySelector(".barraNome input").value;
  const senha = document.querySelector(".barraSenha input").value;

  // Verifica se já existem dados no localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Procura o usuário pelo email ou usuário informado
  const usuarioEncontrado = usuarios.find((usuario) => {
    return (usuario.email === usuarioEmail || usuario.usuario === usuarioEmail) && usuario.senha === senha;
  });

  if (usuarioEncontrado) {
    alert("Login bem-sucedido!");
    // Redireciona o usuário para a página "pagina-logada.html" após o login
    window.location.href = "index.html";
  } else {
    alert("Usuário/email ou senha incorretos. Tente novamente.");
  }
});
