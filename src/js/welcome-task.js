import { refs } from './refs';
import { initWelcomeTaskPage, onNameInput } from './handler';


document.addEventListener('DOMContentLoaded', initWelcomeTaskPage);
refs.nameInput.addEventListener('input', onNameInput);

