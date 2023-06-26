//Clock Functioning:
const funClock = () => {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.querySelector(".hour_hand");
  const minuteHand = document.querySelector(".minute_hand");
  const secondHand = document.querySelector(".second_hand");

  // Logic--

  const hoursDegrees = (hours / 12) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  setTimeout(funClock, 1000);
};
funClock();

//For changing color:
const myElement = document.querySelector(".clock");

let hue = 0; // starting hue value
const updateBoxShadowColor = () => {
  hue = (hue + 1) % 360; // increment hue value
  const boxShadowColor = `hsla(${hue}, 100%, 50%, 0.5)`; // set new box shadow color
  myElement.style.boxShadow = `3px 4px 10px ${boxShadowColor}`; // update box shadow
  myElement.style.filter = 'grayscale(100%)';
  requestAnimationFrame(updateBoxShadowColor); // call function again to continuously update color
};

updateBoxShadowColor(); // start updating color
