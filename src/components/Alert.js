import React from 'react';

function Alert({ alert }) {
  return (
    <div style={{ height: '50px' }}>
      {alert && (  // Correct placement of curly braces and condition
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{alert.msg}</strong>
        </div>
      )}
    </div>
  );
}

export default Alert;
