// JavaScript code for the Peer Feedback Hub

// Mock data for demonstration purposes
const employees = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" }
  ];
  
  // Function to populate the recipient list dynamically
  function populateRecipientList() {
    const recipientSelect = document.getElementById("feedback-recipient");
  
    employees.forEach((employee) => {
      const option = document.createElement("option");
      option.value = employee.id;
      option.textContent = employee.name;
      recipientSelect.appendChild(option);
    });
  }
  
  // Function to handle feedback submission
  function handleFeedbackSubmit(event) {
    event.preventDefault();
  
    const recipientSelect = document.getElementById("feedback-recipient");
    const feedbackContent = document.getElementById("feedback-content");
  
    // Perform validation and submission logic here
    // ...
  
    // Clear form fields after submission
    recipientSelect.value = "";
    feedbackContent.value = "";
  
    // Display submitted feedback in the feedback list
    displayFeedback();
  }
  
  // Function to display feedback in the feedback list
  function displayFeedback() {
    const feedbackList = document.getElementById("feedback-list");
  
    // Clear existing feedback
    feedbackList.innerHTML = "";
  
    // Retrieve and display feedback dynamically
    // ...
  
    // Example of displaying mock feedback
    const mockFeedback = [
      { sender: "John Doe", content: "Great job on the presentation!" },
      { sender: "Jane Smith", content: "Your attention to detail is impressive." },
      { sender: "Bob Johnson", content: "Thank you for your collaboration." }
    ];
  
    mockFeedback.forEach((feedback) => {
      const feedbackItem = document.createElement("div");
      feedbackItem.classList.add("feedback-item");
      feedbackItem.innerHTML = `
        <strong>${feedback.sender}:</strong>
        <p>${feedback.content}</p>
      `;
      feedbackList.appendChild(feedbackItem);
    });
  }
  
  // Populate recipient list on page load
  document.addEventListener("DOMContentLoaded", populateRecipientList);
  
  // Attach event listener to the feedback submission form
  const feedbackForm = document.getElementById("feedback-form");
  feedbackForm.addEventListener("submit", handleFeedbackSubmit);
  