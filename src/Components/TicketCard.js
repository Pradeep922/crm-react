import React from 'react';
import {Link} from 'react-router-dom';
import Display from './Display'
import StatusDisplay from './StatusDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'
import '../index.css';

const TicketCard = ({color, ticket}) => {
  return (
    <div className="ticket-card">

      <Link to={`/ticket/${ticket.documentId}`} id="link">
      <div className="ticket-color" style={{ backgroundColor : color}}></div>
      <h3>{ticket.title}</h3>
      <Display ticket={ticket}/>
      <StatusDisplay ticket={ticket.status}/>
      <PriorityDisplay priority={ticket.priority}/>
      <ProgressDisplay progress={ticket.progress}/>
    </Link>
    <DeleteBlock />
    </div>
  )
}

export default TicketCard