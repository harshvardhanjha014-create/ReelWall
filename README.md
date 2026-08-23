# 🚫 Instagram Reels Blocker

A lightweight Chrome extension built with **Vanilla JavaScript** that blocks Instagram Reels by detecting Reel-related URLs and displaying a full-screen overlay over the Instagram interface.

This project was built to practice **Chrome Extensions, JavaScript DOM manipulation, URL detection, and content scripts**.

## 🚀 Features

- 🚫 Blocks Instagram Reel pages
- 🔍 Detects URLs containing `reel` or `reels`
- 🖥️ Displays a full-screen blocking overlay
- ⚡ Works automatically when navigating through Instagram
- 🌐 Runs directly on `instagram.com`
- 🧩 Built using a Chrome Extension Manifest V3 configuration
- 🔄 Periodically checks the current URL to handle Instagram's dynamic navigation

## 🛠️ Technologies Used

- **JavaScript** — URL detection, DOM manipulation, and blocking logic
- **Chrome Extensions API** — Extension configuration and content scripts
- **HTML/CSS via JavaScript** — Creation and styling of the blocking overlay
- **Manifest V3** — Chrome extension configuration

## 🧠 How It Works

The extension runs a JavaScript content script on Instagram.

When Instagram is opened, the extension stores the initial URL:

`window.location.href`

The extension then checks whether the current URL contains:

- `reel`
- `reels`

If either is detected, the extension creates a full-screen overlay and places it above the Instagram interface.

The overlay uses a very high `z-index`:

`2147483647`

This ensures that the blocking screen appears above the normal Instagram UI.

## 🔄 Navigation Detection

Instagram behaves like a single-page application, meaning navigation between sections can happen without completely reloading the webpage.

To account for this, the extension periodically checks the current URL using:

`setInterval(check_path, 2000)`

This allows the extension to detect when the user navigates to a Reel after the initial page load.

## 📁 Project Structure

Instagram-Reels-Blocker/
│
├── index.js
├── manifest.json
└── README.md

## 📄 Manifest

The extension uses **Manifest V3** and injects `index.js` into Instagram pages:

`https://www.instagram.com/*`

The content script is therefore available throughout the Instagram website.

## ▶️ Installation

1. Download or clone this repository.

2. Open Chrome.

3. Navigate to:

`chrome://extensions/`

4. Enable **Developer mode**.

5. Click **Load unpacked**.

6. Select the project folder containing `manifest.json`.

7. Open Instagram.

8. Try navigating to a Reel.

The extension should display the blocking overlay.


## 🧠 What I Learned

This project helped me understand several important concepts in browser extension development:

- Chrome Extension Manifest V3
- Content scripts
- `window.location.href`
- URL detection using `.includes()`
- DOM element creation with `document.createElement()`
- Dynamically modifying CSS using JavaScript
- `document.body.prepend()`
- Fixed-position overlays
- `z-index`
- `setInterval()`
- Handling navigation inside single-page applications
- Running JavaScript directly inside an existing webpage

## 🔮 Future Improvements


- [ ] Add a popup to enable/disable the blocker
- [ ] Add an option to choose which Instagram sections to block
- [ ] Improve navigation detection using `MutationObserver` or History API hooks


## ⚠️ Current Limitations

The current version uses URL-based detection and a periodic URL check.

Because Instagram is a dynamic single-page application, its navigation behavior can change over time. The extension may therefore require updates if Instagram changes its URL structure or navigation implementation.

## 👨‍💻 Author

**Harshvardhan Jha**

Built as part of my journey learning **JavaScript, Chrome Extensions, browser APIs, and project-based programming**.

## ⭐ Acknowledgements

Built for learning and experimentation with browser extension development.
