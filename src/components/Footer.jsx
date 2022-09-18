import React from 'react'
import "../App.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import Facebook from "../image/facebook.png"
import Twitter from "../image/twitter.png"
import Linkedin from "../image/linkedin.png"
import Github from "../image/github.png"
import Instagram from "../image/instagram.png"
import logo from "../image/LOGO.png"
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='text-center' color='white' id='Footer'>
      <MDBContainer className='p-4'>
         <label id='labelImage'> <img src={logo} alt="la boutique.png" /></label>
        <section className='mb-4'>
         <img id='iconsFooter' src={Facebook} alt="" />
         <img id='iconsFooter' src={Twitter} alt="" />
         <img id='iconsFooter' src={Linkedin} alt="" />
         <img id='iconsFooter' src={Github} alt="" />
         <img id='iconsFooter' src={Instagram} alt="" />
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          Millions of brands of all sizes trust Square to accept payments,
           build customer relationships, and grow their business in-store and online.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Branches..</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Nigeria(Ng)
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   Soyth Africa(Sf)
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  USA(Ua)
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   China(Ca)
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Telephone</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                   (+234)9032127081
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   (+234)8057111353
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   (+111)128-000-234
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    (+111)234-167-097
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Home Town branches..</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    16 uqua Road, Akwa Ibom.
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    James Town,Lekki, Lagos.
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   Leba Street, Abuja
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Youth shelter, Uyo
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          E.Zommer.Zulu.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer