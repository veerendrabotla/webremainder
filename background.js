// Listener for triggered alarms
chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(alarm.name, (data) => {
    if (data[alarm.name]) {
      const { url, note, title } = data[alarm.name];

      // Create notification
      chrome.notifications.create(alarm.name, {
        type: "basic",
        iconUrl: "icon.png",
        title: title || "Web Reminder",
        message: note || "Don't forget to check this site!",
        buttons: [
          { title: "Open Website" },
          { title: "Reschedule" }
        ],
        priority: 1
      });
    }
  });
});

// Handle notification button clicks
chrome.notifications.onButtonClicked.addListener((notifId, buttonIndex) => {
  chrome.storage.local.get(notifId, (data) => {
    if (data[notifId]) {
      if (buttonIndex === 0) {
        chrome.tabs.create({ url: data[notifId].url });
      } else if (buttonIndex === 1) {
        chrome.tabs.create({ url: `reschedule.html?id=${notifId}` });
      }
      chrome.notifications.clear(notifId);
    }
  });
});
