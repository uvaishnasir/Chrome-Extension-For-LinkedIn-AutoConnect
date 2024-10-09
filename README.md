Here's a sample `README.md` file for your LinkedIn connection automation Chrome extension project. The file includes details about the project, how to set it up, run it, and a brief description of the functionality.

---

# LinkedIn Connection Automation Chrome Extension

This Chrome extension automates sending connection requests on LinkedIn. It adds a "Connect with All" button to the LinkedIn **My Network** page, which, when clicked, sends connection requests to all visible profiles on the page. The extension includes a delay between each request to avoid being flagged as spam by LinkedIn.

## Features
- Adds a floating "Connect with All" button to the LinkedIn My Network page.
- Sends connection requests to all visible profiles with a "Connect" button.
- Includes a customizable delay between each connection request (default is 2 seconds).
- Notifies the user once all connection requests are sent.

## Technologies Used
- **React.js** for the UI components.
- **Webpack** for bundling the source code.
- **Chrome Extension API** for interacting with the Chrome browser.

## Getting Started

### Prerequisites
Before you can run this project, you need to have the following installed:

- **Node.js** (>=12.x.x)
- **npm** or **yarn**
- **Google Chrome** browser

### Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/linkedin-connection-automation.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd linkedin-connection-automation
   ```

3. **Install Dependencies:**

   Install the necessary packages by running the following command:

   ```bash
   npm install
   ```

4. **Build the Extension:**

   Once all dependencies are installed, build the project using Webpack:

   ```bash
   npx webpack --config webpack.config.js
   ```

   This will generate a `bundle.js` file in the `dist` directory.

### How to Run the Extension

1. **Open Chrome and navigate to the Extensions page:**

   Type the following URL into Chrome’s address bar:

   ```
   chrome://extensions/
   ```

2. **Enable Developer Mode:**

   In the top-right corner of the extensions page, toggle the "Developer Mode" switch.

3. **Load the unpacked extension:**

   - Click the "Load unpacked" button.
   - Navigate to the project folder and select the root folder of the project (where the `manifest.json` is located).
   - The extension will now be installed and visible in your Chrome toolbar.

4. **Go to LinkedIn My Network Page:**

   Navigate to the LinkedIn My Network page:

   ```
   https://www.linkedin.com/mynetwork/grow/
   ```

5. **Use the Extension:**

   Once you’re on the LinkedIn My Network page, you will see a floating button labeled "Connect with All" at the **top-right corner** of the page. Click the button to send connection requests to all visible profiles with a "Connect" button.

### How the Extension Works

- The extension injects a button into the LinkedIn **My Network** page.
- When clicked, it finds all visible "Connect" buttons and simulates clicks on them with a 2-second delay between each request.
- If no connectable profiles are found, it will alert the user.
- Once all requests are sent, an alert will notify the user.

## Folder Structure

```
linkedin-connection-automation/
├── dist/
│   ├── bundle.js
├── src/
│   ├── Content.js
│   ├── index.js
├── manifest.json
├── package.json
├── webpack.config.js
└── README.md
```
