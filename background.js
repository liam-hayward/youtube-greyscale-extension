chrome.action.onClicked.addListener(() => {
    chrome.storage.local.get("isGrey", (data) => {
        const newState = !data.isGrey;
        chrome.storage.local.set({ isGrey: newState });
    });
});