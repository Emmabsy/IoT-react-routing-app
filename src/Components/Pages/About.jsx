import {managers} from '/Users/admin/Documents/MERN/routing-app/src/data';
import Card from '../../UI/Card';
import '../Pages/About.css'

import {
     Col, Row, Button
} from 'react-bootstrap';

const About = () => {
  return (
    <div>
        <div className="mx-5 my-3"> 
      
        <h3 className="mt-5 text-primary"> Get started with IoTEm</h3>
        <p> Internet of Things (IoT) services and solutions to connect and manage billions of devices. Collect, store, and analyze IoT data for industrial, consumer, commercial, and automotive workloads.</p>
        <p>  </p>

        <h5> Meet our Manegement Team </h5>
         </div>

         <div className="manager-team">
        {
          managers.map(({image, id, name, title, desc})=>{
            return (
              <Card className='' key={id}>

                <div className="trainer_img" style={{ width: 200 }} >
                {
                    <img src={image} alt={name} />
                }
               </div>
                
                <h4> {name}</h4>
                <p>{title}</p>
                <small>{desc}</small>
               
                
                
              </Card>
            )
          })
        }

      </div>

        



    </div>
  )
}

export default About