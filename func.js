function updateGreeting() {
    const greetingElement = document.getElementById("greeting");
    const now = new Date();
    const hours = now.getHours();
  
    if (hours >= 0 && hours < 12) {
      greetingElement.textContent = "Good morning,";
    } else if (hours >= 12 && hours < 17) {
      greetingElement.textContent = "Good afternoon,";
    } else {
      greetingElement.textContent = "Good evening,";
    }
  }
  
  // Update the greeting initially
  updateGreeting();
  
  // Update the greeting every hour (adjust the interval as needed)
  setInterval(updateGreeting, 3600000); // 3600000 milliseconds = 1 hour