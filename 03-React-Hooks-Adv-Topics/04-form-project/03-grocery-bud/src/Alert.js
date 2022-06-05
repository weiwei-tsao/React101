import React, { useEffect } from 'react'

const Alert = ({ show, msg, type, removeAlert }) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, []) // so the alert will be disappear after loaded 3 seconds

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  );
}

export default Alert
