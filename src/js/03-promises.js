function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('form');

form.addEventListener(`submit`, e => {
  e.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]').value;
  const stepInput = document.querySelector('input[name="step"]').value;
  const amountInput = document.querySelector('input[name="amount"]').value;

  for (let i = 1; i <= amountInput; i++) {
    const position = i;
    const currentDelay = delayInput + stepInput;
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        console.log(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`Rejected promise ${position} in ${delay}ms`);
      });
  }
});
// komentarz test
