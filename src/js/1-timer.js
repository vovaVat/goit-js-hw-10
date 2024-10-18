// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector('[data-start]');
const datetimePicker = document.getElementById('datetime-picker');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
let userSelectedDate= null;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];

        if (userSelectedDate < Date.now()) {
            iziToast.error({
                title: 'Помилка',
                message: 'Please choose a date in the future',
            });
            startButton.disabled = true;
        } else {
            startButton.disabled = false;
        }
    },
  };
  

const flatpickr = require("input#datetime-picker", options);

startButton.addEventListener(click,startTimer);

function startTimer(){
    
}