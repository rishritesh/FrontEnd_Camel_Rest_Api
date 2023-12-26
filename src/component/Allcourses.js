import React, { useEffect, useState } from 'react'
import Course from './Course'
import base_url from '../service/Api'
import axios from 'axios'


export const Allcourses = () => {

    

    useEffect(()=>{
        document.title="All Courses"
        getAll();
    },[])

    const [courses,setCourse]=useState([
    ])

    const getAll=()=>{
        axios.get(`${base_url}/course`).then
        ((response)=>{
            console.log(response)
            console.log(response.data);
            setCourse(response.data);
        },
        (error)=>{
            console.log(error)
        }
        )
        
    }

    const deteleUpdateCourse=(id)=>{
        setCourse(courses.filter((c)=> c.id != id))
    }
   

  return (
    <div>
        <h1>All Courses</h1>
       {
        courses.length>0 ? courses.map((item)=>{return <Course key={item.id} course={item} update={deteleUpdateCourse} />}):"not Available" 
       }
    </div>
  )
}
export default Allcourses
