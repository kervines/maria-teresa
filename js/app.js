import Countdown from './countdown.js';

const contagem = document.querySelector('.contagem-regressiva');
const contagemParaoDia = new Countdown('6 April 2024 23:59:59 GMT-0300');

setInterval(() => {
  contagem.innerHTML = `
  <div><span>${contagemParaoDia.total.days}</span><p>dias para o grande dia!</p></div> `;
});
