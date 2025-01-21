
# Web Reminder Chrome Extension

## Overview
The **Web Reminder Chrome Extension** is a productivity tool designed to help users set reminders for specific web pages. 
Users can add titles, notes, and select precise dates and times for reminders, ensuring they never miss revisiting an important site.

## Features
- **Set Reminders:** Schedule reminders with titles, notes, and the associated URL.
- **Custom Time Selection:** Choose specific dates and times for reminders.
- **Notifications:** Receive notifications with options to open the site or reschedule the reminder.
- **Reschedule Option:** Modify reminders directly from the notification popup.

## Installation
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner.
4. Click on "Load unpacked" and select the project folder.
5. The extension will appear in your browser's toolbar.

## How to Use
1. Click on the extension icon to open the popup.
2. The current tab's URL is automatically filled in.
3. Enter a title, optional note, and select the reminder date and time.
4. Click **Set Reminder** to schedule it.
5. When the reminder time is reached, a notification will appear.

## File Structure
- `popup.html` - The user interface for setting reminders.
- `popup.js` - Handles user input and interactions.
- `background.js` - Manages alarms, notifications, and storage.
- `reschedule.html` - Provides a UI for rescheduling reminders.
- `reschedule.js` - Handles rescheduling logic.

## Contribution
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
