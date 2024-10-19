import React from 'react';

function Alert({ alert }) {
  return (
    alert && (
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{alert.msg}</strong>
      </div>
    )
  );
}

export default Alert;
