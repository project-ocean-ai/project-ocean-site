const form = document.querySelector(".access-form");
const input = document.querySelector(".access-form input");
const button = document.querySelector(".access-form button");
const message = document.querySelector(".form-message");

if (form && input && button && message) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = input.value.trim();

    if (!email || !email.includes("@")) {
      message.textContent = "Please enter a valid email.";
      message.classList.add("show");
      input.focus();
      return;
    }

    button.textContent = "Request Sent";
    input.value = "";
    input.placeholder = "Email received";

    message.textContent =
      "Confirmed — your founder access request has been received.";
    message.classList.add("show");
  });
}