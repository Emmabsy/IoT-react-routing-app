import {Link} from 'react-router-dom';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
  return (
    <div>
       <div className="mx-5 my-3"> 
     
       
    
        <h4 className=' mt-5'> Get started with IoTEm</h4>
        <p> Internet of Things (IoT) services and solutions to connect and manage billions of devices. </p>
        <p> Collect, store, and analyze IoT data for industrial, consumer, commercial, and automotive workloads. </p>
         </div>

         <div>
          <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '70%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <CDBFooterLink to="/" className= "flex align-items-center p-0 text-darkflex p-0 text-primary font-weight-bold" style={{ cursor: 'pointer', padding: '0' }}>
             
              <span className="ml-3 h5 font-weight-bold">IoTEm</span>
            </CDBFooterLink>
            <p className="my-3" style={{ width: '200px' }}>
             From secure device connectivity to management, storage, and analytics.
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
             QuickLinks
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink to="/">Home</CDBFooterLink>
              <CDBFooterLink to="/about">About Us</CDBFooterLink>
              <CDBFooterLink to="/contact">Contact</CDBFooterLink>
              <CDBFooterLink to="/services">Services</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink to="/">Support</CDBFooterLink>
              <CDBFooterLink to="/">Sign Up</CDBFooterLink>
              <CDBFooterLink to="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Services
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink to="/"> IoT Edulink</CDBFooterLink>
              <CDBFooterLink to="/">IoT Greengas</CDBFooterLink>
              <CDBFooterLink to="/">FreeRTOS</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
        <small className="text-center mt-5">&copy; Emma, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
         </div>
       



</div>

  )
}

export default Footer