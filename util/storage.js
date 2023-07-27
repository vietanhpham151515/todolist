const TODOs_STORAGE_KEY = "TODOS";

export default  {
  get() {
    return JSON.parse(localStorage.getItem(TODOs_STORAGE_KEY)) || [];
  },
  set(todos) {
    localStorage.setItem(TODOs_STORAGE_KEY, JSON.stringify(todos));
  },
};
