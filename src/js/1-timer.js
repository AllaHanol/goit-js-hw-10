'use strict';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


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

    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }
      
      console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
      console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
      console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
      




    
    
},1000)
});

