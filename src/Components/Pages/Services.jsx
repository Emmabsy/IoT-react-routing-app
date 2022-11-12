import {service} from '/Users/admin/Documents/MERN/routing-app/src/data'
import { Link } from 'react-router-dom'
import Card from '../../UI/Card'

import {
     Col, Row, Button
} from 'react-bootstrap';

const Services = () => {
  return (
    <div className="mx-5 my-3"> 
        <h1> IoT Services </h1>
       
    
        <h4> Accelerate innovation with the most complete set of IoT services</h4>
        <p> Connect your devices and operate them at the edge.</p>
         <div className="programs_wrapper">
        {
          service.map(({id, title, info, path})=>{
            return (
              <Card className='program_program' key={id}>
                
                <h4> {title}</h4>
                <small>{info}</small>
               
                <Link to={path} className="mt-2"> Get Started
                 </Link>
                
              </Card>
            )
          })
        }

      </div>

  
    
   
    </div>
  );

    
  
    
  
}

export default Services