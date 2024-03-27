import Countdown from './countdown.js';

const contagem = document.querySelector('.contagem-regressiva');
const contagemParaoDia = new Countdown('1 April 2024 23:59:59 GMT-0300');

setInterval(() => {
  contagem.innerHTML = `
  <div><span>${contagemParaoDia.total.days} </span><p>dias</p></div> 
  <div><span>${contagemParaoDia.total.hours} </span><p>horas</p></div>
  <div><span>${contagemParaoDia.total.minutes}</span><p>minutos</p></div>
  <div><span>${contagemParaoDia.total.seconds}</span><p>segundos</p></div>`;
});
