'use strict';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import '../css/snackbar.css'
import { saveToLS, loadFromLS } from './helper.js';

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const delay = parseInt(form.elements.delay.value);
  const state = form.elements.state.value;
  createPromise(delay, state)
    .then((delay) => {
      iziToast.show({
        position: 'topRight',
        title: 'Success',
        titleColor: '#fff',
        titleSize: '16',
        titleLineHeight: '24',
        message: '`✅ Fulfilled promise in ${delay}ms`',
        messageColor: '#fff',
        messageSize: '16',
        messageLineHeight: '24',
        progressBarColor: '#326101',                   
        backgroundColor: '#59A10D',
      });
    })
    .catch((delay) => {
      iziToast.show({
        position: 'topRight',
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16',
        titleLineHeight: '24',
        message: '`❌ Rejected promise in ${delay}ms`',
        messageColor: '#fff',
        messageSize: '16',
        messageLineHeight: '24',
        progressBarColor: '#B51B1B',                   
        backgroundColor: '#EF4040',
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