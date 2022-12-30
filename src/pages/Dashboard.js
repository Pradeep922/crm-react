import React from 'react'
import TicketCard from '../Components/TicketCard'
import '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showTickets } from '../store/reducers/ticketlist/ticketlist.action';
import { useNavigate } from 'react-router-dom';
// import {allTickets} from '../store/reducers/ticketlist/ticketlist.selector'
// import { selectError } from '../store/reducers/ticketlist/ticketlist.selector';

const Dashboard = () => {

const dispatch = useDispatch();
const Navigate = useNavigate();


const user = useSelector((state) => state.userLogin.userInfo)
console.log(user);


useEffect(() => {
  if (user === null) {
    Navigate('/')
  }else {
  dispatch(showTickets())}
}, [dispatch, user, Navigate]);

const list = useSelector((state) => state.ticketlist.allticketlist);
const error = useSelector((state) => state.ticketlist.error);

console.log('list: ', list);
console.log('error: ', error);

  const tickets = [
    { 
      key:1,
      category: 'A1',
      color: 'red',
      title: 'Ticket-1',
      owner: 'Pradeep',
      status: 'Done',
      priority: 9,
      progress: 90,
      description: 'Need the Project as soon as possible'

    },
    {
      key:2, 
      category: 'A2',
      color: 'blue',
      title: 'Ticket-2',
      owner: 'Tharun',
      status: 'Working on it',
      priority: 6,
      progress: 50,
      description: 'Complete the Ticket by next week'

    },
    {
      key:3,
      category: 'A3',
      color: 'red',
      title: 'Ticket-3',
      owner: 'Sid',
      status: 'Stuck',
      priority: 1,
      progress: 10,
      description: 'Need the Project next month'
    }
  ]

const colors = [
  'rgb(255, 179, 186)',
  'rgb(255, 223, 186)',
  'rgb(255, 255, 186)',
  'rgb(186, 255, 201)',
  'rgb(186, 255, 255)',
]

let uniqueCategories;

if (user != null) {
   uniqueCategories = [
    ...new Set(list?.map(({category}) => category))
  ]
}

  console.log(uniqueCategories)

  return (
    <div className="dashboard">

      <h1>My Projects</h1>
      {list ? (<div className="ticket-container">
        
        {list && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h3>{uniqueCategory}</h3>
            {list.filter(ticket => ticket.category === uniqueCategory)
            .map((filteredTicket, _index) => (
              <TicketCard
              key={_index} 
              id={_index}
              color={colors[categoryIndex] || colors[0]}
              ticket={filteredTicket}
              />
            ))}
            </div>
        ))
        }

        
      </div>) : (<div>
        <h1>User not Logged in</h1> 
        </div>)}
    </div>
  )
}

export default Dashboard