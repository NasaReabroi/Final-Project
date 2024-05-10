 // Check if the current time is within the opening hours of the food truck
 const currentTime = new Date();
 const currentHour = currentTime.getHours();
 const currentMinute = currentTime.getMinutes();
 let openCloseStatus;

 if ((currentHour >= 6 && currentHour < 18) || (currentHour === 18 && currentMinute === 0)) {
   openCloseStatus = "Open";
 } else {
   openCloseStatus = "Closed";
 }