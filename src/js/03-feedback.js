document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".feedback-form");
  const emailInput = form.querySelector("input[name='email']");
  const messageInput = form.querySelector("textarea[name='message']");

  const updateLocalStorage = _.throttle(function () {
    const feedbackState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackState));
  }, 500);

  form.addEventListener("input", function () {
    updateLocalStorage();
  });

  const storedState = localStorage.getItem("feedback-form-state");
  if (storedState) {
    const parsedState = JSON.parse(storedState);
    emailInput.value = parsedState.email || "";
    messageInput.value = parsedState.message || "";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    localStorage.removeItem("feedback-form-state");
    emailInput.value = "";
    messageInput.value = "";

    console.log({
      email: emailInput.value,
      message: messageInput.value,
    });
  });
});
