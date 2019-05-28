import React from 'react'

const Notification = (props) => {
  const { message, type, children } = props;

  const className = (type) => {
    switch (type) {
      case "success":
        return "alert alert-success"
      case "message":
        return "alert alert-info"
      case "caution":
        return "alert alert-warning"
      case "error":
        return "alert alert-danger"
      default:
        return "alert alert-info"
    }
  }

  return (
    <div className={className(type)}>
      <p>{message}</p>
      {children}
    </div>
  )
};

export default Notification;