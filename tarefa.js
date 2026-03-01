function salvarTarefa() {

  console.log("botão clicado!");

  const titulo = document.getElementById('tarefa-titulo').value.trim();
  const prioridade = document.getElementById('tarefa-prioridade').value.trim();
  const responsavel = document.getElementById('tarefa-responsavel').value.trim();
  const descricao = document.getElementById('tarefa-descricao').value.trim();
  const dataInicio = document.getElementById('tarefa-dataInicio').value.trim();
  const dataConclusao = document.getElementById('tarefa-dataConclusao').value.trim();
  const status = document.getElementById('tarefa-status').value.trim();
  const projeto = document.getElementById('tarefa-projeto').value.trim();

  if (!titulo || !prioridade || !responsavel || !descricao || !dataInicio || !status || !projeto) {
    alert("Campos essenciais não podem ficar vazios.");
    return;
  }

  const tarefa = {
    titulo: titulo,
    prioridade: prioridade,
    responsavel: responsavel,
    descricao: descricao,
    dataInicio: dataInicio,
    dataConclusao: dataConclusao,
    status: status,
    projeto: projeto,
    id: Date.now()
  }

  let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  const index = tarefas.findIndex(t => t.id === tarefa.id);

  if (index !== -1) {
    tarefas[index] = tarefa;
  } else {
    tarefas.push(tarefa);
  }

  localStorage.setItem('tarefas', JSON.stringify(tarefas));

  alert("Tarefa cadastrada com sucesso!")


}