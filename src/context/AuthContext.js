import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // Try to sign up
    // Handle success by updating state
    // Handle failure
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to sign in
    // Handle success by updating state
    // Handle failure
  };
};

const signout = (dispatch) => {
  return () => {
    // Try to sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
