function salvarUsuario() {
  console.log("botão clicado")

  const nome = document.getElementById('nome-usuario').value.trim();
  const cpf = document.getElementById('cpf-usuario').value.trim();
  const email = document.getElementById('email-usuario').value.trim();
  const dataNascimento = document.getElementById('nascimento-usuario').value.trim();
  const status = document.getElementById('status-usuario').value.trim();
  const senha = document.getElementById('senha-usuario').value.trim();

  // Validação simples para evitar salvar vazio
  if (!nome || !cpf || !email) {
    alert("Por favor, preencha os campos obrigatórios.");
    return;
  }

  const usuario = {
    id: Date.now(),
    nome: nome,
    cpf: cpf,
    email: email,
    dataNascimento: dataNascimento,
    status: status,
    senha: senha
  }

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const index = usuarios.findIndex(u => u.cpf === usuario.cpf);

  if (index !== -1) {
    usuarios[index] = usuario;
  } else {
    usuarios.push(usuario);
  }

  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert("Usuário salvo com sucesso!!")

}