import React from "react";

// Function to simulate a click event on all visible "Connect" buttons
function connectWithAllProfiles() {
  const connectButtons = Array.from(document.querySelectorAll("button")).filter(
    (button) => button.innerText.includes("Connect")
  );

  if (connectButtons.length === 0) {
    alert("No connectable profiles available");
    return;
  }

  let index = 0;
  const delay = 2000; // 2-second delay between each request to prevent blocking

  function clickNextButton() {
    if (index < connectButtons.length) {
      connectButtons[index].click();
      index++;
      setTimeout(clickNextButton, delay); // Wait before clicking the next button
    } else {
      alert("All connection requests sent!");
    }
  }

  clickNextButton();
}

const ConnectWithAllButton = () => {
  return (
    <button
      id="connectAllButton"
      style={{
        position: "fixed",
        top: "42px",
        right: "20px",
        zIndex: 9999,
        padding: "10px 20px",
        backgroundColor: "#0073b1",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={connectWithAllProfiles}
    >
      Connect with All
    </button>
  );
};

export default ConnectWithAllButton;
