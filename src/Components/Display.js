import React from 'react'
import blankAvatar from '../images/blank.jpg';
import '../index.css';

const Display = ({ticket}) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img src={ticket.avatar ? ticket.avatar : blankAvatar}  alt={'photo of' + ticket.owner}/>
      </div>
    </div>
  )
}

export default Display