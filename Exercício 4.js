// 1. Função para calcular o tempo restante
function calcularTempoRestante(dataFutura) {
  const agora = new Date();
  const futuro = new Date(dataFutura);

  const diff = futuro - agora; // milissegundos

  if (diff <= 0) {
    return null; // tempo esgotado
  }

  // Cálculos
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  return { dias, horas, minutos, segundos };
}

// Data alvo (exemplo): 31 de Dezembro 2028 às 22h
const dataFutura = "2028-12-31T22:00:00";

// 2. Função que atualiza o temporizador na tela
function atualizarTemporizador() {
  const tempo = calcularTempoRestante(dataFutura);

  if (!tempo) {
    console.log("⏱ Contagem finalizada!");
    clearInterval(intervalId);
    return;
  }

  const { dias, horas, minutos, segundos } = tempo;

  console.log(
    `${dias}d ${horas}h ${minutos}m ${segundos}s restantes`
  );
}

// 3. Atualizar a cada segundo
const intervalId = setInterval(atualizarTemporizador, 1000);

// 4. Exibir imediatamente a primeira vez
atualizarTemporizador();
