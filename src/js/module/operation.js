export default function operation() {
  const dateWeek = document.querySelector('[data-week]');
  const daysWeek = dateWeek.dataset.week.split(',').map(Number);
  const hourWeek = dateWeek.dataset.hour.split(',').map(Number);


  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const hourNow = dateNow.getHours();

  const weekOpen = daysWeek.indexOf(dayNow) !== -1;
  const hourOpen = hourNow >= hourWeek[0] && hourNow < hourWeek[1];

  if (weekOpen && hourOpen) {
    dateWeek.classList.add('open');
  }
}