// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      window.alert('Please choose a date in the future');
    }
    const startBtn = document.querySelector(`button[data-start]`);
    if (selectedDate < currentDate) {
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};
flatpickr('#datetime-picker', options);
