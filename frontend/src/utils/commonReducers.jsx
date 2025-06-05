// src/redux/utils/commonReducers.js

/**
 * Sets the loading state to true and clears previous error.
 * @param {object} state - The current state
 */
export const setLoading = (state) => {
  state.loading = true;
  state.error = null;
};

/**
 * Sets the loading state to false and updates the error from payload.
 * @param {object} state - The current state
 * @param {object} action - The action object containing error payload
 */
export const setError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

/**
 * Resets standard state properties: loading, error, and message.
 */
export const resetState = (state) => {
  state.loading = false;
  state.error = null;
  // state.message = null;
};

export const fullUserReset = (state) => {
  state.user = null;
  state.token = null;
  state.isAuthenticated = false;
  state.loading = false;
  state.error = null;
  state.message = null;
};

export const setAuthSuccess = (state, action) => {
  state.loading = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isAuthenticated = true;
};
