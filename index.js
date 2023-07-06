document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function() {
      const durationInput = document.getElementById("duration");
      const allocatedTime = parseInt(durationInput.value);
    
      if (!isNaN(allocatedTime) && allocatedTime > 0) {
        const firstDuration = allocatedTime / 2;
        const breakDuration = 5 * 60 * 1000; // 5 minutes in milliseconds
        const remainingDuration = allocatedTime / 2;
    
        console.log("allocatedTime:", allocatedTime);
        console.log("firstDuration:", firstDuration);
        console.log("Break Duration:", breakDuration);
        console.log("Remaining Duration:", remainingDuration);
    
        setTimeout(function() {
          console.log("Break time!");
    
          // JSON data
          const jsonData = {
            "break": [
              {
                "id": 1,
                "activity": "music",
                "link": "https://www.youtube.com/watch?v=MxjrsDV8Aeo"
              }
            ]
          };
    
          const breaks = jsonData.break;
          const randomIndex = Math.floor(Math.random() * breaks.length);
          const randomBreak = breaks[randomIndex];
          const breakLink = randomBreak.link;
    
          console.log("Break Link:", breakLink);
    
          // Open the break video in a new tab
          const breakWindow = window.open(breakLink, "_blank");
    
          setTimeout(function() {
            console.log("Break is over!");
            // Close the break tab
            breakWindow.close();
    
            // Resume actions after the break duration
            setTimeout(function() {
              console.log("Remaining time is over!");
              alert("Time is up!");
            }, remainingDuration * 60 * 1000); // Convert remaining duration to milliseconds
          }, breakDuration);
    
        }, firstDuration * 60 * 1000); // Convert first duration to milliseconds
      }
    });
  });
  