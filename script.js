const form = document.querySelector(".access-form");
const input = document.querySelector("input");
const button = document.querySelector("button");

if (form && input && button) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = input.value.trim();

    if (!email) {
      input.focus();
      return;
    }

    button.textContent = "Request Received";
    form.classList.add("submitted");
  });
}

const revealTargets = document.querySelectorAll("footer");

revealTargets.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealTargets.forEach((element) => observer.observe(element));