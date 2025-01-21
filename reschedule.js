document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const reminderId = params.get("id");
    const form = document.getElementById("reschedule-form");
  
    // Form submission handler for rescheduling
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const newDatetime = document.getElementById("datetime").value;
  
      if (!newDatetime) {
        alert("Please select a valid date and time.");
        return;
      }
  
      const rescheduleTime = new Date(newDatetime);
      const now = new Date();
  
      if (rescheduleTime <= now) {
        alert("Please select a future date and time.");
        return;
      }
  
      const delayInMinutes = Math.round((rescheduleTime - now) / 60000);
  
      chrome.storage.local.get(reminderId, (data) => {
        if (data[reminderId]) {
          chrome.storage.local.set({
            [reminderId]: { ...data[reminderId], datetime: newDatetime }
          });
          chrome.alarms.create(reminderId, { delayInMinutes });
          alert("Reminder rescheduled successfully!");
          window.close();
        } else {
          alert("Failed to reschedule reminder.");
        }
      });
    });
  });
  