import React, { useContext } from "react";
import { IoIosAlert } from "react-icons/io";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <IoIosAlert />
        {alert.message}
      </div>
    )
  );
};

export default Alert;
