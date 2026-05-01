// Get references to DOM elements
const input = document.getElementById("ctaInput");
const button = document.getElementById("updateBtn");
const cta = document.getElementById("cta");

// Add event listener to button for updating the CTA headline
button.addEventListener("click", function() {
    // Get the trimmed value from the input field
    const newText = input.value.trim();

    // Update the headline if the input is not empty
    if (newText !== "") {
        cta.textContent = newText;
        // Clear the input after updating
        input.value = "";
    }
});