import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
          <MDBFooter bgColor='dark' className='text-center text-lg-start text-white' style={{marginTop:"70px"}}>
  
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3' style={{paddingTop:"30px"}}>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon  className="me-3" />
                <i className="fa-solid fa-truck-fast fa-lg me-2"  style={{color:"#FFD43B"}}></i> E-Cart
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 '>
              <i class="fa-solid fa-link me-2 fa-lg" style={{color:"#FFD43B"}} ></i>
                Links</h6>
              <p>
               <Link to={"/"} style={{textDecoration:"none"}}>
              Home
               </Link>
              </p>
              <p>
              <Link to={"/Cart"} style={{textDecoration:"none"}}>
            Cart
               </Link>
              </p>
              <p>
              <Link to={"/Wishlist"} style={{textDecoration:"none"}}>
              WhishList
               </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <i class="fa-regular fa-file-lines fa-lg me-2"  style={{color:"#FFD43B"}}></i>
                Guides</h6>
              <p>
                React
              </p>
              <p>
               React Bootstrap
              </p>
              <p>
               BootsWatch
              </p>
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <i class="fa-solid fa-address-book fa-lg me-2"  style={{color:"#FFD43B"}}></i>
                Contact Us</h6>
             <div style={{display:"flex"}}>
              <input type="text" name="" id="" placeholder='Enter Your Email Id:' style={{padding:"8px",fontSize:"14px",height:"35px"}}/>
              <button className='ms-2 border-0 rounded text-white' style={{backgroundColor:"#FFD43B",padding:"8px",height:"35px",paddingBottom:"18px"}}>Subscribe</button>
             </div>

             <div className='mt-4'style={{cursor:"pointer"}}>
             <MDBIcon fab icon="facebook-f" className='fa-xl'/>
             <MDBIcon fab icon="twitter"  className='ms-4 fa-xl'/>
             <MDBIcon fab icon="linkedin"  className='ms-4 fa-xl'/>
             <MDBIcon fab icon="instagram"  className='ms-4 fa-xl'/>
             <MDBIcon fab icon="github"  className='ms-4 fa-xl'/>
             
             </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Copyright  © 2024 :   E-Cart .Build With React
      

      </div>
    </MDBFooter>


    </div>
  )
}

export default Footer