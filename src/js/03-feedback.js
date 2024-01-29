import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const storageKey = "feedback-form-state";

const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value
  };
  localStorage.setItem(storageKey, JSON.stringify(formState));
};

const loadFormState = () => {
  const storedFormState = localStorage.getItem(storageKey);
  if (storedFormState) {
    const formState = JSON.parse(storedFormState);
    emailInput.value = formState.email;
    messageTextarea.value = formState.message;
  }
};

emailInput.addEventListener('input', throttle(saveFormState, 500));
messageTextarea.addEventListener('input', throttle(saveFormState, 500));

window.addEventListener('load', loadFormState);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value
  };
  
  console.log("Submitted Form Data:", formState);
  localStorage.removeItem(storageKey);
  emailInput.value = "";
  messageTextarea.value = "";
});