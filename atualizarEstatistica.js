function atualizarEstatistica() {
  const projetos = JSON.parse(localStorage.getItem('projetos'));

  const totalAtivos = projetos.filter(p => p.status && p.status.toLowerCase() === 'ativo').length;
  const totalInativos = projetos.filter(p => p.status && p.status.toLowerCase() === 'inativo').length;
  
  const totalGeral = projetos.length;

  const cardConcluido = document.getElementById('total-concluido');
  const cardAndamento = document.getElementById('total-andamento');
  const cardGeral = document.getElementById('total-geral');

  if (cardConcluido) cardConcluido.innerHTML = totalAtivos;
  if (cardAndamento) cardAndamento.innerHTML = totalInativos;
  if (cardGeral) cardGeral.innerHTML = totalGeral;
}

atualizarEstatistica();