import { STORAGE_KEYS } from './constants';
import { refs } from './refs';
import { getFromLocalStorage, saveToLocalStorage } from './storage';

export function onNameInput(event) {
const userName = event.target.value.trim();
refs.welcomeText.textContent = `Welcome, ${userName}`;
localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userName));
if (userName === '') {
refs.welcomeText.textContent = `Welcome, guest`;
}
}


export function initWelcomeTaskPage(event) {
 try {
const storageDataName = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER));
refs.welcomeText.textContent = storageDataName ? `Welcome, ${storageDataName}` : `Welcome, guest`;

refs.nameInput.value = storageDataName;
} catch (error) {
console.log(error);
}
}


export function onColorStatusChange(event) {
  console.log('hello');
  const color = event.target.value;
  saveToLocalStorage(STORAGE_KEYS.USER_COLOR, color);
  refs.colorStatus.textContent = color;
}

export function initColorTaskPage() {
  const data = getFromLocalStorage(STORAGE_KEYS.USER_COLOR);
  if (data) {
    refs.colorStatus.textContent = data;
  }
}

export function onNotoficationCheckBoxChange(event) {
  const isChecked = event.target.checked;
  saveToLocalStorage(STORAGE_KEYS.IS_CHECKED, isChecked);
  refs.notificationText.textContent = isChecked ? 'Сповіщення увімкнені' : 'Сповіщення вимкнені';
}

export function initSwitchTaskPage() {
  const data = getFromLocalStorage(STORAGE_KEYS.IS_CHECKED);
  console.log(data);
   if (data) {
refs.notificationText.textContent = 'Сповіщення увімкнені';
refs.notificationCheckBox.checked = data;
   }
}

