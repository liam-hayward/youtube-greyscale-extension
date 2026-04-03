# YouTube Greyscale Toggle

A lightweight Chrome extension that toggles YouTube into greyscale mode. Useful for reducing visual stimulation, saving your eyes at night, or just vibing in monochrome.

---

## Features

- **One-click toggle** - click the extension icon to enable/disable greyscale
- **Persistent state** - your preference is remembered across tabs and browser restarts
- **Sync across tabs** - toggling in one YouTube tab instantly updates all other open YouTube tabs
- **Scoped effect** - greyscale is applied only to the video player, thumbnails, and avatars; the sidebar, subscriptions, and UI chrome remain unaffected

---

## Installation

> This extension is not yet on the Chrome Web Store. Install it manually in developer mode.

1. **Clone this repository**
   ```bash
   git clone https://github.com/liam-hayward/youtube-greyscale-extension
   ```

2. **Open Chrome Extensions**
   - Navigate to `chrome://extensions`
   - Enable **Developer mode** (toggle in the top-right corner)

3. **Load the extension**
   - Click **Load unpacked**
   - Select the cloned folder

4. **Done!**
   - The extension icon will appear in your toolbar
   - Navigate to YouTube and click the icon to toggle greyscale

---

## Usage

| Action | Result |
|---|---|
| Click extension icon on YouTube | Toggle greyscale on/off |
| Open a new YouTube tab | Inherits the current toggle state |
| Reload the page | State is preserved |

---

## File Structure

```
youtube-greyscale-extension/
├── manifest.json      # Extension config (Manifest V3)
├── background.js      # Handles icon click, persists state via chrome.storage
├── content.js         # Applies/removes greyscale class on YouTube pages
├── style.css          # CSS filter scoped to video player, thumbnails, and avatars
├── icon16.png
├── icon48.png
└── icon128.png
```

---

## How It Works

1. **`background.js`** listens for clicks on the extension icon and flips a boolean (`isGrey`) in `chrome.storage.local`
2. **`content.js`** runs on every YouTube page. It reads the stored state on load and watches for storage changes, so all open tabs update in real time
3. **`style.css`** applies `filter: grayscale(100%)` to a targeted set of YouTube elements including the video player, thumbnails, and avatars, leaving the rest of the UI intact

---

## Contributing

Pull requests are welcome! If you find a bug or have a feature suggestion, please [open an issue](https://github.com/liam-hayward/youtube-greyscale-extension/issues).

---

## License

[MIT](LICENSE)
