const form = document.querySelector(".access-form");
const message = document.querySelector(".form-message");

function encode(data) {
  return new URLSearchParams(data).toString();
}

if (form && message) {
  const input = form.querySelector('input[type="email"]');
  const button = form.querySelector('button');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = input.value.trim();

    if (!input.checkValidity()) {
      message.textContent = "Please enter a valid email address.";
      message.classList.remove("success");
      message.classList.add("show", "error");
      input.focus();
      return;
    }

    button.textContent = "Sending...";
    button.disabled = true;

    try {
try {
  const formData = new URLSearchParams();
  formData.append("form-name", "founder-access");
  formData.append("email", input.value);

  const res = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  if (!res.ok) throw new Error("Failed");

  input.value = "";
  input.placeholder = "Email received";
  button.textContent = "Request Sent";

  message.textContent =
    "Confirmed — your founder access request has been received.";
  message.classList.remove("error");
  message.classList.add("show", "success");

} catch (err) {
  button.textContent = "Try Again";
  message.textContent =
    "Something went wrong. Please try again or email sarah@projectocean.ai.";
  message.classList.remove("success");
  message.classList.add("show", "error");
}

    button.disabled = false;
  });
}