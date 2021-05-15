// storage event doesn't trigger in the tab/window that caused it,
// so this changes localStorage to fire a custom event every time
// data is changed. This will be used to track changes in localStorage,
// e.g., to track when a user has logged in/out.

const setItem = localStorage.setItem.bind(localStorage);
const removeItem = localStorage.removeItem.bind(localStorage);
const clear = localStorage.clear.bind(localStorage);

const storageChangeEvent = new Event('storagechange', { bubbles: true });

const localStoragePrototype = Object.getPrototypeOf(localStorage);

localStoragePrototype.setItem = (key, value) => {
    setItem(key, value);
    dispatchEvent(storageChangeEvent);
};

localStoragePrototype.removeItem = key => {
    removeItem(key);
    dispatchEvent(storageChangeEvent);
};

localStoragePrototype.clear = () => {
    clear();
    dispatchEvent(storageChangeEvent);
};

Object.setPrototypeOf(localStorage, localStoragePrototype);
