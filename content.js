const html = document.documentElement;

// Function to set the class based on a true/false value
const applyState = (isEnabled) => {
    if (isEnabled) {
        html.classList.add("grey-mode");
    } else {
        html.classList.remove("grey-mode");
    }
};

// 1. Initial check when the page first loads
chrome.storage.local.get("isGrey", (data) => {
    applyState(data.isGrey);
});

// 2. The Watcher: If storage changes (even in another tab), update this page
chrome.storage.onChanged.addListener((changes) => {
    if (changes.isGrey) {
        applyState(changes.isGrey.newValue);
    }
});