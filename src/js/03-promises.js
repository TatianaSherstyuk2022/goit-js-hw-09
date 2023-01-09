import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formElem = document.querySelector('.js-form');


formElem.addEventListener('submit', onSubmitForm);


function onSubmitForm(e) {
  e.preventDefault();

  const delay = Number(e.target.elements.delay.value);
  const step = Number(e.target.elements.step.value);
  const amount = Number(e.target.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
  console.log(daley, amount, step);
}

function createPromise(position, delay) {
  const object = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(object);
      } else {
        reject(object);
      }
    }, delay);
    console.log(daley, amount, step);
  });
}
