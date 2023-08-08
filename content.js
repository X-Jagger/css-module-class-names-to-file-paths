// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === "inject-script") {
        // Read the text from the clipboard
        navigator.clipboard.readText().then((text) => {
            // Convert the text
            const filePath = convertClassNameToFilePath(text);

            // Write the result back to the clipboard
            navigator.clipboard.writeText(filePath);
        });
    }
});

// Convert a CSS Module class name into a file path
function convertClassNameToFilePath(className) {
    // Split the class name into parts
    const parts = className.replace(/__?.*/, "").split("-");
    parts.pop();

    // Join the remaining parts with slashes
    const filePath = parts.join("/");

    return filePath;
}
