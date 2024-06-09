'use strict';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { saveToLS, loadFromLS } from './helper.js';

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const delay = parseInt(form.elements.delay.value);
  const state = form.elements.state.value;
  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        title: 'Success',
        message: `:white_check_mark: Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        message: `:x: Rejected promise in ${delay}ms`,
      });
    });
});
function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}