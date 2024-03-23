const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const localKey = 'feedback-form-state';
let formDataEl = {};

fillFormFields();

formEl.addEventListener(
'input',
event => {
formDataEl[event.target.name] = event.target.value;
localStorage.setItem(localKey, JSON.stringify(formDataEl));
}
);

formEl.addEventListener('submit', event => {
event.preventDefault();
if (inputEl.value !== '' && textareaEl.value !== '') {
console.log(formDataEl);
localStorage.removeItem(localKey);
event.currentTarget.reset();
return;
}
alert('All fields must be filled!');
});

function fillFormFields() {
const saveFormFields = localStorage.getItem(localKey);
if (saveFormFields) {
formDataEl = JSON.parse(saveFormFields);
inputEl.value = formDataEl.email || '';
textareaEl.value = formDataEl.message || '';
}
}