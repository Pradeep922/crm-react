import React from 'react';
import '../index.css';

const Deleteblock = () => {

  const deleteTicket = () => {
  }
  return (
    <div className="delete-block">
    <div className="delete-icon" onClick={deleteTicket}>X</div>
    </div>
  )
}

export default Deleteblock;