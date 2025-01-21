document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reminder-form");

  // Set the current tab URL in the input field
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const urlInput = document.getElementById("url");
    urlInput.value = tabs[0].url;
  });

  // Form submission handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const url = document.getElementById("url").value;
    const title = document.getElementById("title").value;
    const note = document.getElementById("note").value;
    const datetime = document.getElementById("datetime").value;

    if (!datetime) {
      alert("Please select a valid date and time.");
      return;
    }

    const reminderTime = new Date(datetime);
    const now = new Date();

    if (reminderTime <= now) {
      alert("Please choose a future date and time.");
      return;
    }

    const delayInMinutes = Math.round((reminderTime - now) / 60000); // Convert milliseconds to minutes
    const reminderId = `reminder-${Date.now()}`;

    chrome.storage.local.set({
      [reminderId]: { url, title, note, datetime }
    });

    chrome.alarms.create(reminderId, { delayInMinutes });
    alert("Reminder set successfully!");
  });
});
