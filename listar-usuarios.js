function listarUsuarios() {

  const divPai = document.getElementById('div-pai')
  const divFilha = document.getElementById('div-filha')

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  console.log(usuarios);

  divPai.innerHTML = '';

  usuarios.forEach(usuario => {
    const divProjeto = document.createElement('div');
    divProjeto.className = 'projeto-card';

    divProjeto.innerHTML = `
    <h3>${usuario.nome}</h3>
    <p>E-mail: ${usuario.email}</p>
      <p>Status: ${usuario.status}</p>
      <p>Data de Nascimento: ${usuario.dataNascimento}</p>
    `
    divPai.appendChild(divProjeto);
  });




}

listarUsuarios();