import { createStore } from 'redux';
import rootReducer, { loadStateFromLocalStorage, saveStateToLocalStorage } from './reducers';

// Load state from localStorage
const persistedState = loadStateFromLocalStorage();

// Create the Redux store with the persisted state
const store = createStore(rootReducer, persistedState);

// Save the state to localStorage whenever the store changes
store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;