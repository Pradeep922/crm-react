import React, {useState, useEffect} from 'react';
import '../index.css';
import {createTicket} from '../store/reducers/tickets/tickets.action.js'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



const TicketPage = () => {

const Navigate = useNavigate();
const dispatch = useDispatch();
const adminerror = useSelector((state) => state.ticket.error);
const user = useSelector((state) => state.userLogin.userInfo)

useEffect(() => {
  if (user === null) {
    Navigate('/')
  }
}, [user, Navigate]);

if (adminerror) {
  alert('Not an Admin User')
}

  const [formData, setFormData] = useState({
    title : "",
    description : "",
    category : "",
    status : ""
  })
  const editMode = false

const handleSubmit = (e) => {
  e.preventDefault()
  const {title, description, category, priority, progress, status} = formData;
  dispatch(createTicket(title, description, category, priority, progress, status, Navigate));

}

const handleChange = (e) => {
  const value = e.target.value
  const name = e.target.name

  setFormData((prevState) => ({
    ...prevState,
    [name] : value
  }))  
}

const categories = ['test-1', 'test-2']

  return (
    <div className="ticket">
      <h1>{editMode ? 'Update your Ticket' : 'Create a new Ticket'}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
            id="title"
            name="title"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.title}
            />

            <label htmlFor="description">Description</label>
            <input
            id="description"
            name="description"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.description}
            />

            <label>Category</label>
            <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            >
              {categories?.map((category, _index) =>(
                <option key={_index} value={category}>{category}</option> 
              ))}
            </select>


            <label htmlFor="new-category">New Category</label>
            <input
            id="category"
            name="category"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.category}
            />

            <label>Priority</label>
            <div className='multiple-input-container'>
              <input 
                 id="priority-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                defaultValue={1}
                checked={formData.priority === 1}
                />
            <label htmlFor="priority-1">1</label>
            <input 
                id="priority-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority === 2}
                />
            <label htmlFor="priority-1">2</label>
            <input 
                id="priority-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority === 3}
                />
            <label htmlFor="priority-1">3</label>
            <input 
                id="priority-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority === 4}
                />
            <label htmlFor="priority-1">4</label>
            <input 
                id="priority-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority === 5}
                />      
            <label htmlFor="priority-1">5</label>
            </div>

             {editMode && 
             <> 
             <input 
                type="range"
                id="progress"
                name="progress"
                value={formData.progress}
                min="0"
                max="100"
                onChange={handleChange}
                />      
            <label htmlFor="progress">Progress</label>
            
            
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
                >
                  <option selected={formData.status === 'done'} value='done'>Done</option>
                  <option selected={formData.status === 'working on it'} value='working on it'>Working on it</option>
                  <option selected={formData.status === 'stuck'} value='stuck'>Stuck</option>
                  <option selected={formData.status === 'not started'} value='not started'>Not Started</option>
            </select>
            </>
        }
        {/* <button type="submit">Submit</button> */}
        <input type='submit' />
        </section>

        <section>
          <label htmlFor='owner'>Owner</label>
          <input 
                
                id="owner"
                name="owner"
                value={formData.owner}
                type="text"
                onChange={handleChange}
                required={false}
                />
          
          <label htmlFor='avatar'>Avatar</label>
          <input 
                
                id="avatar"
                name="avatar"
                value={formData.avatar}
                type="url"
                onChange={handleChange}
                required={false}
                />  
        </section>


        </form>
      </div>
    </div>
  )
}

export default TicketPage;