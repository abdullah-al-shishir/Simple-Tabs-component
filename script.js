




document.addEventListener('DOMContentLoaded', () => {
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listener to each tab button
tabButtons.forEach(button => {
button.addEventListener('click', () => {
// Remove 'active' class from all buttons and content
tabButtons.forEach(btn => btn.classList.remove('active'));
tabContents.forEach(content => content.classList.remove('active'));

// Add 'active' class to the clicked button
button.classList.add('active');

// Get the ID of the content associated with the clicked button
const targetTabId = button.dataset.tab; // Using data-tab attribute
const targetContent = document.getElementById(targetTabId);

// Add 'active' class to the corresponding content

targetContent.classList.add('active');

        });
    });
});