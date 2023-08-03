import { combineReducers } from 'redux';

const initialState = {
  dataToSave: '', // Replace with your desired initial state
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, dataToSave: action.payload };
    default:
      return state;
  }
};

// Add more reducers if needed

const rootReducer = combineReducers({
  data: dataReducer,
  // Add more reducers here
});

export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    // Handle errors here, e.g., if localStorage is disabled
  }
};

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined; // Return undefined to use the initial state defined in the rootReducer
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined; // Return undefined to use the initial state defined in the rootReducer
  }
};

export default rootReducer;