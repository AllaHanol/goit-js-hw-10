'use strict';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//       console.log(selectedDates[0]);
//     },
//   };
  
const refs = {
    datetimePicker:document.querySelector('#datetime-picker'),
    startBtn:document.querySelector('[data-start]'),
    days:document.querySelector('[data-days]'),
    hours:document.querySelector('[data-hours]'),
    minutes:document.querySelector('[data-minutes]'),
    seconds:document.querySelector('[data-seconds]'),
}
const initTime = Date.now(); 
intervalId = setInterval( ()=>{
    const currentTime = Date.now();
    const diff = initTime-currentTime;
    const time = convertMs(diff)
})

refs.startBtn.addEventListener('click',()=>{
   
setInterval(()=>{
    const date = Date.now()
    const currentTime = initTime - date;

    const hours = currentTime.getHours(); 
    console.log(hours);

    // const minutes = (currentTime - hours).getMinutes();
    // const seconds = (currentTime - minutes).getSeconds();






    
    
},1000)
});

