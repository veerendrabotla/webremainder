
# Reminders Chrome Extension

This is a Chrome extension that allows users to set reminders for different websites they visit and view/manage those reminders through a dashboard.

## Features

- **Set Reminders**: 
  - Users can set reminders for specific URLs with titles, notes, and future date/time.
  - Once the time is reached, an alert will appear as a reminder.
  
- **View and Delete Reminders**: 
  - View the reminders you've set for specific URLs in the dashboard.
  - Remove any unwanted reminders easily.

## Folder Structure

```
- manifest.json              // Manifest file for Chrome extension
- popup.html                 // Popup UI to set reminders
- popup.js                   // JavaScript logic for popup page
- dashboard.html             // Dashboard UI to view and manage reminders
- dashboard.js               // JavaScript logic for managing reminders in the dashboard
- background.js              // Background script for persistent alarms handling
- icons/                     // Icons for extension UI (e.g., icon.png)
- readme.md                  // Project README file
```

## Setup Instructions

1. Clone or download the extension files.
2. Open Chrome and go to `chrome://extensions`.
3. Enable "Developer mode" at the top right.
4. Click on "Load unpacked" and select the folder where your extension files are saved.
5. The extension will now be active and you can click on the extension's icon in the top-right corner to set a reminder.

## How it Works

### Setting a Reminder:
- When you click on the extension icon, a popup appears where you can:
  - Enter the **URL** (auto-filled from the active tab).
  - Provide a **title**, **note**, and select the **reminder date & time**.
- When the user submits the form, the reminder is saved in the Chrome `localStorage`.

### Reminder Dashboard:
- You can open the **Manage Reminders** tab from the popup to view all your set reminders.
- Each reminder will display:
  - **Title**
  - **Note**
  - **Reminder Date & Time**
- There is an option to delete any reminders.

### Notifications:
- Once the scheduled time for a reminder arrives, a Chrome notification is triggered.

## License

MIT License

## Author

Botla Veerendra
