import React ,{useEffect, useState} from 'react'
import {Alert, Button, Container, Form, FormGroup, Input,Textarea} from 'reactstrap'
import axios from 'axios'
import base_url from '../service/Api'
import { useParams } from 'react-router-dom'

export const Updateform = () => {
    const[course,setCourse]=useState({
    })

    const {id}=useParams()

    

    useEffect(()=>{
       
        loadUser()
        console.log(course)
    },[])
    
    const HandlerForm=(e)=>{
        console.log(course)
        Postdata(course)
        
        e.preventDefault();
    }

    const loadUser=()=>{
        axios.get(`${base_url}/course/${id}`).then((data)=>{ setCourse(data.data)
        //console.log(data.data)
    })
      
       
            
       
    }

    const Postdata=(data)=>{
        axios.post(`${base_url}/course`,data).then
        ((response)=>{
            console.log(response)
            window.location.href="http://localhost:3000/all-courses";
           
          
        },
        (error)=>{
            console.log(error)
        }
        )
    }
  return (
    <div >
        <Form onSubmit={HandlerForm}>
            <FormGroup>
                {/* <label className='text-left' htmlFor="userId">CourseID</label> */}
                <Input hidden type='text' placeholder='enter your id' name='id' id='userId'
                onChange={(e)=>{
                    setCourse({...course,id:e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="course">Course Name</label>
                <Input type='text' placeholder='enter your course' name='course' id='course'
                value={course.name}
                onChange={(e)=>{
                    setCourse({...course,name:e.target.value})
                }}
                         />
            </FormGroup>
            <FormGroup>
                <label htmlFor="des">Description </label>
                <Input type='textarea' placeholder='enter your description' name='des' id='des'
                value={course.description}
                onChange={(e)=>{
                    setCourse({...course,description:e.target.value})
                }}/>
            </FormGroup>
            <Container>
                <Button  type='submit' color='primary'>Save</Button>
                <Button type='reset' color='warning mx-3'>Reset</Button>
            </Container>
        </Form>
    </div>
  )
}

export default Updateform