// Captura o formulário de cadastro pelo ID
const cadastroForm = document.querySelector(".caixaLogin");

cadastroForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Captura os valores digitados nos campos
  const usuario = document.querySelector(".barraNome input").value;
  const email = document.querySelector(".barraEmail input").value;
  const senha = document.querySelector(".barraSenha input").value;

  // Verifica se já existem dados no localStorage
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verifica se já existe um usuário com o mesmo email cadastrado
  const usuarioExistente = usuarios.find((user) => {
    return user.email === email;
  });

  if (usuarioExistente) {
    alert("Este email já está cadastrado.");
    return;
  }

  // Cria um objeto com os dados do novo usuário
  const novoUsuario = {
    usuario,
    email,
    senha,
  };

  // Adiciona o novo usuário ao array de usuários
  usuarios.push(novoUsuario);

  // Atualiza os dados no localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Limpa os campos do formulário após o cadastro
  cadastroForm.reset();

  // Redireciona o usuário para a página "teLogin.html" após o cadastro bem-sucedido
  window.location.href = "teLogin.html";
});

