const idb =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;
let db;

const request = idb.open("tracker", 1);
request.onupgradeneeded = ({ target }) => {
  const db = target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = ({ target }) => {
  db = target.result;
  if (navigator.onLine) {
    // call function to check database
    check();
  }
};

request.onerror = (event) => {
  console.log("error", event.target.errorCode);
};

const save = (transaction) => {};

const check = () => {};
