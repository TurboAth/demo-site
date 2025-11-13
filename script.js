// script.js

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
  
  // Find the element with the ID 'current-year'
  const yearSpan = document.getElementById("current-year");
  
  if (yearSpan) {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Set the text content of the span to the current year
    yearSpan.textContent = currentYear;
  }

  console.log("Site scripts loaded successfully!");
});
