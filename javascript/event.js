    // JavaScript logic to show event details when clicked
    function showEventDetails(eventId) {
        // Hide all event details
        const allEventDetails = document.querySelectorAll('.event-details');
        allEventDetails.forEach(details => {
          details.style.display = 'none';
        });
  
        // Show the event details corresponding to the clicked event
        const eventDetails = document.getElementById(`event-details-${eventId}`);
        eventDetails.style.display = 'block';
      }

      