chrome.action.onClicked.addListener((tab) => {
    chrome.storage.local.get("isGrey", (data) => {
        const newState = !data.isGrey;
        chrome.storage.local.set({ isGrey: newState });
        updateIcon(newState);
    });
});

function updateIcon(isGrey) {
    chrome.action.setIcon({
        path: isGrey
            ? { 16: "icon16-active.png", 48: "icon48-active.png", 128: "icon128-active.png" }
            : { 16: "icon16.png", 48: "icon48.png", 128: "icon128.png" }
    });
}

// Restore correct icon on service worker startup
chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get("isGrey", (data) => {
        updateIcon(data.isGrey);
    });
});