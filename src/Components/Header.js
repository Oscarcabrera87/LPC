import React from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon } from 'mdb-react-ui-kit';


const Header = () => {

    return (
        <header>
          <MDBNavbar expand='lg' light bgColor='warning'>
            <MDBContainer fluid>
              <MDBNavbarToggler
                aria-controls='navbarExample01'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <MDBIcon fas icon='bars' />
              </MDBNavbarToggler>
              <div className='collapse navbar-collapse' id='navbarExample01'>
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
              </div>
            </MDBContainer>
          </MDBNavbar>
    
          <div className='p-5 text-center bg-warning'>
            <h1 className='mb-3'>Latinx Playwrights Circle</h1>
            <h4 className='mb-3'>The future of American Theatre</h4>
            {/* <a className='btn btn-primary' href='' role='button'>
              Call to action
            </a> */}
          </div>
        </header>
      );
    }
export default Header