import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

export const Menu = () => {
  return (
    <ListGroup >
        <Link className='list-group-item list-group-item-action' tag="a" to='/' action>
            Home
        </Link>
        <Link className='list-group-item list-group-item-action' tag="a" to='/add-form' action>
            AddCourse
        </Link>
        <Link className='list-group-item list-group-item-action' tag="a" to='/all-courses' action>
            AllCourses
        </Link>
        {/* <Link className='list-group-item list-group-item-action' tag="a" to='/all-courses' action>
            View Courses
        </Link> */}
        <Link className='list-group-item list-group-item-action' tag="a" to='/about' action>
            About
        </Link>
    </ListGroup>
  )
}

export default Menu