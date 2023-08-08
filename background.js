// Listen for the command
chrome.commands.onCommand.addListener((command) => {
    if (command === "inject-script") {
        // Query the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            // Check if there is an active tab
            if (tabs.length > 0) {
                // Send a message to the content script in the active tab
                chrome.tabs.sendMessage(tabs[0].id, {
                    command: "inject-script",
                });
            } else {
                console.log("No active tab found");
            }
        });
    }
});
