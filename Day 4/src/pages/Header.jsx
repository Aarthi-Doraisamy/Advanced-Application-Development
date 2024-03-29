import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Link } from 'react-router-dom';
import './Headers.scss'
export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div
        id='intro-example'
        className='p-5 text-center bg-image' 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg')" }}
      >
        <div className='mask' style={{backgroundColor: 'rgb(0, 0, 0, 0.4)' }}>
          <div className='d-flex justify-content-center align-items-center h-100' >
            <div className='text-white'>
            <h1 className='mb-3' style={{ color: 'white' }}>Online Boat Booking</h1>

              <h5 className='mb-4'> LUXURY &amp; STAY </h5>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                style={{ color:"white", borderColor: 'white'}}
                rel="nofollow"
                target="_blank"
                href='./Login'
                
                >
                Sign In
                </MDBBtn>
                <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                style={{ color:"white",borderColor: 'white'}}
                target="_blank"
                href='./Register'
              >
                SignUp
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
}