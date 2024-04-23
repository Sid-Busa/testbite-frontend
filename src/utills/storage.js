export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const saveJsonToLocalStorage = (key, value) => {
  const serializedValue =
    typeof value === "string" ? value : JSON.stringify(value);
  saveToLocalStorage(key, serializedValue);
};

export const getFromLocalStorage = (key, isJson = false) => {
  try {
    return isJson
      ? JSON.parse(localStorage.getItem(key))
      : localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const clearFromStorage = async () => {
  localStorage.clear();
};
