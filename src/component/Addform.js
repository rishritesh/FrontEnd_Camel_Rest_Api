import React, { useEffect, useState } from 'react'
import {Alert, Button, Container, Form, FormGroup, Input,Textarea} from 'reactstrap'
import axios from 'axios'
import base_url from '../service/Api'


export const Addform = () => {
    

    const[course,setCourse]=useState(()=>{})
    
    const HandlerForm=(e)=>{
        console.log(course)
        Postdata(course)
        
        e.preventDefault();
    }

    const Postdata=(data)=>{
        axios.post(`${base_url}/course`,data).then
        ((response)=>{
            console.log(response)
            // alert("successfully submited")
            window.location.href = '/all-courses'; 
            
            
          
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
                <label hidden className='text-left' htmlFor="userId">CourseID</label>
                <Input hidden type='text' placeholder='enter your id' name='id' id='userId'
                onChange={(e)=>{
                    //setCourse({...course,id:e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="course">Course Name</label>
                <Input type='text' placeholder='enter your course' name='course' id='course'
                onChange={(e)=>{
                    setCourse({...course,name:e.target.value})
                }}
                         />
            </FormGroup>
            <FormGroup>
                <label htmlFor="des">Description </label>
                <Input type='textarea' placeholder='enter your description' name='des' id='des'
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

export default Addform