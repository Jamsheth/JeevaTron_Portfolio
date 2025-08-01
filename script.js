document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from actual submitting

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var project = document.getElementById("project").value;
  var budget = document.getElementById("budget").value;
  var message = document.getElementById("message").value;

  // Compose WhatsApp Message
  var whatsappMessage =
    "Hello, I would like to start a project.%0A%0A" +
    "*Name:* " +
    name +
    "%0A" +
    "*Email:* " +
    email +
    "%0A" +
    "*Project Type:* " +
    project +
    "%0A" +
    "*Budget Range:* " +
    budget +
    "%0A" +
    "*Project Details:* " +
    message;

  // Replace with your WhatsApp number (With country code, no + sign)
  var phoneNumber = "919080425563";

  // Redirect to WhatsApp chat
  var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + whatsappMessage;
  window.open(whatsappURL, "_blank");
});
