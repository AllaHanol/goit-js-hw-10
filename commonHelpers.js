import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import"./assets/vendor-94c342ae.js";const o={datetimePicker:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let n;o.startBtn.addEventListener("click",()=>{const t=Date.now();n=setInterval(()=>{}),setTimeout(()=>{clearInterval(n)},t-Date.now()),o.startBtn.disabled=!0});function e(t){const r=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),s=Math.floor(t%864e5%36e5/6e4),a=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:c,minutes:s,seconds:a}}console.log(e(2e3));console.log(e(14e4));console.log(e(2414e4));
//# sourceMappingURL=commonHelpers.js.map
