import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [data, setData] =useState ({})

    const handleChange=(e) =>{
      const name=e.tartget.name;
      const value=e.target.value;
      //Create an object for tge current input field event

      const  currentInputFieldData ={
        [name]:value
      }
  
    const updatedData= {
      ...data,
      ...currentInputFieldData

    } 
    }
  
   const handleSubmit = (e)=>{
    console.log(data);
    e.preventDefault();
   }
  

  return (
    <div>
      <h1> This is the Contact Page</h1>
      <form onSubmit={handleSubmit}> 
        <label>
          First name:
          <input name="firstName" type ="text" onChange={handleChange}/>
        </label> <br/>
        <label>
          Middle name:
          <input name="middleName" type ="text" onChange={handleChange}/>
        </label> <br/>
        <label>
          Last name:
          <input name="lastName" type ="text" onChange={handleChange}/>
        </label> <br/>

        <input type ="Submit" value ="submit"/>

      

      </form>
       

    </div>
  )
}

export default Contact