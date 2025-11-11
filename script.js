// Update current time in milliseconds
function updateTime() {
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
    timeElement.textContent = `Current Time: ${Date.now()} ms`;
  }
}

updateTime();

 setInterval(updateTime, 1000);