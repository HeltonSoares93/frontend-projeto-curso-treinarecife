function atualizarConteiner() {
  const divPai = document.getElementById('div-pai');
  const projetos = JSON.parse(localStorage.getItem('projetos')) || [];
  console.log(projetos);

  divPai.innerHTML = '';

  projetos.forEach(projeto => {
    const divProjeto = document.createElement('div');
    divProjeto.className = 'projeto-card';

    divProjeto.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>Descrição: ${projeto.descricao}</p>
      <p>Status: ${projeto.status}</p>
      <p>Data de Criação: ${projeto.dataInicio}</p>
      <p>Data de Conclusão: ${projeto.dataConclusao}</p>
      <p>Responsável: ${projeto.responsavel}</p>

    <button onClick="confirmarExclusao('${projeto.id}')" class="btn btn-danger">
    Excluir
    </button>


    `;

    divPai.appendChild(divProjeto);
  });
}

function confirmarExclusao(projetoId) {
  // console.log(projetoId)
  const projetos = carregarTodosProjetos();
  const projetosAtualizados = projetos.filter(t => t.id !== projetoId)
  localStorage.setItem('projetos', JSON.stringify(projetosAtualizados))

  alert('Projeto excluido com sucesso!')
}

function carregarTodosProjetos() {
  const todosProjetos = localStorage.getItem('projetos')
  return JSON.parse(todosProjetos);
}

atualizarConteiner();