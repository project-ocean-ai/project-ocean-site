const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const value = input.value.trim();

  if (!value) {
    input.placeholder = "Tell Ocean where to begin...";
    input.focus();
    return;
  }

  button.textContent = "Ocean is listening";
  document.body.classList.add("entered");
});
