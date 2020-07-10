import React, { useReducer } from "react";
import axios from "axios";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types.js";

const AlertState = (props) => {
  const initialState = null;
  //action - api req, dispatching a type
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //set alert
  const setAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };
  return (
    <AlertContext.Provider
      value={{
        //state and functions available throughout the app
        alert: state,
        setAlert,
      }}
    >
      {/* makeing it available everywhere in the app */}
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
