
document.addEventListener("DOMContentLoaded", () => {
  const reminderList = document.getElementById("reminder-list");

  chrome.storage.local.get(null, (reminders) => {
    for (const [key, value] of Object.entries(reminders)) {
      const li = document.createElement("li");
      li.textContent = `${value.title || "Untitled"} - ${value.note || "No note"}`;
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => {
        chrome.storage.local.remove(key);
        li.remove();
      };
      li.appendChild(deleteBtn);
      reminderList.appendChild(li);
    }
  });
});
