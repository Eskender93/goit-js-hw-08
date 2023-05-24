import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const refs = {
  emailInput: form.querySelector('input[name="email"]'),
  messageTextarea: form.querySelector('textarea[name="message"]'),
};

const saveData = () => {
  const formData = {
    email: refs.emailInput.value,
    message: refs.messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadData = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const formData = JSON.parse(savedData);
    refs.emailInput.value = formData.email;
    refs.messageTextarea.value = formData.message;
  }
};

const clearData = () => {
  localStorage.removeItem('feedback-form-state');
  refs.emailInput.value = '';
  refs.messageTextarea.value = '';
};

const submitForm = event => {
  event.preventDefault();
  const formData = {
    email: refs.emailInput.value,
    message: refs.messageTextarea.value,
  };
  console.log(formData);
  clearData();
};

form.addEventListener('input', throttle(saveData, 500));

window.addEventListener('DOMContentLoaded', loadData);

form.addEventListener('submit', submitForm);
