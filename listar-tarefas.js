function listarTarefas() {

  const divPai = document.getElementById('div-pai');
  const divFilha = document.getElementById('div-filha');

  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  console.log(tarefas);

  divPai.innerHTML = '';

  tarefas.forEach(tarefa => {
    const divTarefa = document.createElement('div');
    divTarefa.className = 'tarefa-card';

    divTarefa.innerHTML = `
    <h4>${tarefa.titulo}</h4>
    <p>Descrição: ${tarefa.descricao}</p>
    <p>Data de Início: ${tarefa.dataInicio}</p>
    <p>Data de Conclusão: ${tarefa.dataConclusao}</p>
    `;
    divPai.appendChild(divTarefa)
  });

}

listarTarefas();