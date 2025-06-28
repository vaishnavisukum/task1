 function moveToNext(current, nextId) {
    if (current.value.length >= current.maxLength) {
      document.getElementById(nextId).focus();
    }
  }
     let timeInSeconds = 120; 

    const timerEl = document.getElementById("timer");

    const countdown = setInterval(() => {
  
      let minutes = Math.floor(timeInSeconds / 60);
      let seconds = timeInSeconds % 60;

      let formattedTime = 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);

      timerEl.textContent = formattedTime;

      timeInSeconds--;

      if (timeInSeconds < 0) {
        clearInterval(countdown);
        timerEl.textContent = "Time's up!";
      }
    }, 1000);