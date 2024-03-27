import Countdown from './countdown.js';

const contagem = document.querySelector('.contagem-regressiva');
const contagemParaoDia = new Countdown('6 April 2024 23:59:59 GMT-0300');

setInterval(() => {
  contagem.innerHTML = `
  <div><p>Vamos tomar um café em familia para celebrar o primeiro ano da nossa <span>margarida</span>.</p>
  <span class='number'>Faltam ${contagemParaoDia.total.days} dias.</span>
  </div> `;
});
