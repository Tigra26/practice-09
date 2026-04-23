export function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log(err.message);
  }
}

export function getFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data !== null ? JSON.parse(data) : null;
  } catch (err) {
    console.log(err.message);
  }
}