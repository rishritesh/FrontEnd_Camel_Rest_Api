import React from 'react'
import { Card,CardBody,CardTitle,CardText,CardSubtitle,Button,Container } from 'reactstrap'
import axios from 'axios'
import base_url from '../service/Api'
import Addform from './Addform'
import { Link } from 'react-router-dom'
export const Course = ({course,update}) => {

  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/course/${id}`).then(
      (response)=>{
        update(id)
        alert("course deleted successfully")
        console.log(response)
    },
    (error)=>{
        console.log(error)      
    }
    )
  }

 
 
  return (
    <Card>
        <CardBody className='text-center'>
        <CardSubtitle >{course.name}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
            <Button color='danger mx-3' onClick={()=>{
              deleteCourse(course.id);
            }}>Delete</Button>
            <Link className='btn btn-primary' color='warning' to={`/update/${course.id}`} >Update</Link>
        </Container>
        </CardBody>
    </Card>
  )
}
export default Course
