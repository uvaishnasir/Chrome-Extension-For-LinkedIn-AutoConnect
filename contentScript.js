const script = document.createElement("script");
script.src = chrome.runtime.getURL("dist/bundle.js");

// Log when the script is successfully appended
script.onload = () => {
  console.log("Script appended successfully!");
};

// Log if there is an error loading the script
script.onerror = (e) => {
  console.error("Failed to load the script:", e);
};

// Append the script to the document
document.body.appendChild(script);
