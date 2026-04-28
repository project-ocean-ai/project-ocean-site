const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector(".ocean-input");

function enterOcean() {
  const value = input.value.trim();

  if (!value) {
    input.placeholder = "Tell Ocean where to begin...";
    input.focus();
    form.classList.add("attention");
    setTimeout(() => form.classList.remove("attention"), 900);
    return;
  }

  button.textContent = "Entering Ocean...";
  form.classList.add("active");
  document.body.classList.add("entered");

  setTimeout(() => {
    button.textContent = "Request received";
    input.value = "";
    input.placeholder = "Ocean is listening. Early access is coming.";
  }, 1200);
}

button.addEventListener("click", enterOcean);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    enterOcean();
  }
});
