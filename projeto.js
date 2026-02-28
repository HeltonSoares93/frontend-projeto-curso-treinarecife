function salvarProjeto() {
  console.log("botão clicado");

  const id = Date.now().toString();
  const titulo = document.getElementById('tituloProjeto').value.trim();
  const descricao = document.getElementById('descricaoProjeto').value.trim();
  const responsavel = document.getElementById('responsavelProjeto').value.trim();
  const dataInicio = document.getElementById('dataInicioProjeto').value.trim();
  const dataConclusao = document.getElementById('dataConclusaoProjeto').value.trim();
  const status = document.getElementById('statusSelect').value.trim();

  if (titulo == "" || descricao == "" || responsavel == "" || dataInicio == "") {
    alert("Todos os campos devem ser preenchidos!");
    return;
  }

  const projeto = {
    id: id,
    titulo: titulo,
    descricao: descricao,
    responsavel: responsavel,
    dataInicio: dataInicio,
    dataConclusao: dataConclusao,
    status: status
  };

  let projetos = JSON.parse(localStorage.getItem('projetos') || '[]');

  const index = projetos.findIndex(p => p.id === projeto.id);

  if (index !== -1) {
    projetos[index] = projeto;
  } else {
    // CORREÇÃO 1: Antes estava projeto.push(projeto), o correto é a lista "projetos"
    projetos.push(projeto);
  }

  // CORREÇÃO 2: Removido o projetos.push(projeto) duplicado que ficava aqui solto no código.

  localStorage.setItem('projetos', JSON.stringify(projetos));

  alert("Projeto salvo com sucesso!");

  // Opcional: Limpar os campos após salvar
  // document.querySelector('form').reset();
}

