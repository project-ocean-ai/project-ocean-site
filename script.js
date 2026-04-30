const form = document.querySelector(".access-form");
const input = document.querySelector(".access-form input");
const button = document.querySelector(".access-form button");
const message = document.querySelector(".form-message");

function encode(data) {
  return new URLSearchParams(data).toString();
}

if (form && input && button && message) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = input.value.trim();

    if (!email || !email.includes("@") || !email.includes(".")) {
      message.textContent = "Please enter a valid email.";
      message.classList.add("show", "error");
      input.focus();
      return;
    }

    button.textContent = "Sending...";
    button.disabled = true;

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "founder-access",
          email,
        }),
      });

      input.value = "";
      input.placeholder = "Email received";
      button.textContent = "Request Sent";
      message.textContent =
        "Confirmed — your founder access request has been received.";
      message.classList.remove("error");
      message.classList.add("show");
    } catch {
      button.textContent = "Try Again";
      message.textContent =
        "Something went wrong. Please try again or email sarah@projectocean.ai.";
      message.classList.add("show", "error");
    }

    button.disabled = false;
  });
}