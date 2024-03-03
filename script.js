// Function to send a message
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return; // Check if the input is empty

    appendMessage("user", userInput); // Append user's message to chat box
    document.getElementById("user-input").value = ""; // Clear input field

    // Send user's message to ChatGPT (here you would integrate with an API)
    // For demonstration purposes, we'll just echo back the user's message
    setTimeout(function() {
        appendMessage("bot", "Echo: " + userInput);
    }, 500);
}

// Function to append a message to the chat box
function appendMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);

    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}