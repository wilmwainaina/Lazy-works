# LAZY-WORKS

It sets up a break timer where the user can input a duration of time. The timer will automatically initiate a break halfway through the allocated time and display a specified link for 5 minutes. After the break, the timer will resume and notify the user when the remaining time is up.
 # table of content
  .getting started
  .start the application
  .usage
  .side notes
  .suggestions

# project structure
home.html
style.css
setup.html
index.js
about.html
contact.html

# getting started
1.Clone the repository :git clone https://github.com/wilmwainaina/Lazy-works.git

2.Navigate to the project directory:cd Lazy-works

### Start the Application
Start the local API server:

json-server --watch db.json

Open the index.html file in a web browser.
# Usage
To use the break timer, follow these steps:

1. user must input the duration they will be working in minuted
2. When the user clicks the start button, the code will calculate the break and remaining durations based on the allocated time.
3. A break will occur halfway through the allocated time, displaying a specified link for 5 minutes in a new tab.
4. After the break, the tab will be closed, and the timer will continue.
5. When the remaining time is up, an alert will notify the user.
# The javascript code

```

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
        ```
the json data is displayed here;
```
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
```
Here is the continuation of the javascript file;
```
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
 ```
 ensure you setup a html file that works with the javascript like;

 ```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Break Timer</title>
</head>
<body>

</nav><br>
    <h1>Break Timer</h1>
    <label for="duration">Enter Allocated Time (in minutes):</label>
    <input type="number" id="duration" min="1" required>
    <button id="startButton">Start</button>
    
    <script src="index.js"></script>
</body>
</html>

 ``

# side notes
as of why the json file is within the js file is due to it not being detected when the code was running as multiple errors would show.
this also caused for reduction of items within the json
# License
This code is licensed under the MIT License. Feel free to use and modify it for your purposes.