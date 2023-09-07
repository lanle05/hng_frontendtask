const slackNameElement = document.querySelector(
  '[data-testid="slackUserName"]'
);
const currentDayElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTimeElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);
const myTrackElement = document.querySelector('[data-testid="myTrack"]');

const currentDate = new Date();
const currentDay = currentDate.toLocaleDateString("en-US", { weekday: "long" });
const currentUTCTime = currentDate.toUTCString();

slackNameElement.textContent = "Omobolanle O. Shaibu "; 
currentDayElement.textContent = currentDay;
currentUTCTimeElement.textContent = currentUTCTime;
myTrackElement.textContent = "Frontend"; 
