const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
console.log(items);

let fetureDate = new Date(2023, 7, 25, 17, 30, 0);
console.log(fetureDate);

const year = fetureDate.getFullYear();
const hours = fetureDate.getHours();
const minute = fetureDate.getMinutes();

let month = fetureDate.getMonth();
console.log(months[month]); //fetureDate 5는 months[5]째는 June이나옴 => 월은 0부터 시작하므로
month = months[month];

const date = fetureDate.getDate();

const weekday = weekdays[fetureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minute}am`;

//feature time in ms
const featureTime = fetureDate.getTime();
console.log(featureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = featureTime - today;
  console.log(t);

  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1d = 24hr

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);

    //시간이 만료되면 타이머가 멈추도록 설정
    if (t < 0) {
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }
  });
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
