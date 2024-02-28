import React from 'react';
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

function Header() {
  const wishlist = useSelector((state) => state.wishlistReducer);
  const crt=useSelector((state)=>state.cartReducer);

  return (
    <>
      <Navbar expand="lg" className="bg-primary" style={{ position: "sticky", top: "0px", zIndex: "1" }}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to={"/"} style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
              <img src="https://wrteamdev.github.io/ECart_singlevendor_Website_Doc/images/app_icon.png" alt=""  width={45} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
                    <div className="input-group w-50 rounded ms-5">
  <span className="input-group-text border-0">
    <i className="fa-solid fa-magnifying-glass"></i>
  </span>
  <input type="text" className="form-control" style={{outline: 'none',border:"none"}} placeholder="Search for Products, Brands and More.." />
</div>
            <Nav className="ms-auto" style={{fontFamily:"unset"}}>
           
             
            <Nav.Link href="" className='me-5'>
                <Link style={{ color: "white", fontWeight: "bold", textDecoration: 'none' }}>
                  <i className="fa-solid fa-user"></i> Account
              
                </Link>
              </Nav.Link>

              <Nav.Link href="">
                <Link to={"/Wishlist"} style={{ color: "white", fontWeight: "bold", textDecoration: 'none' }}>
                  <i className="fa-solid fa-heart"></i> WhishList
                  <Badge className={`rounded ms-2 ${wishlist.length > 0 ? 'bg-success' : 'bg-danger'}`}>
                    {wishlist.length}
                  </Badge>
                </Link>
              </Nav.Link>
              <Nav.Link href="" className='ms-3'>
                <Link to={"/Cart"} style={{ color: "white", fontWeight: "bold", textDecoration: 'none' }}>
                  <i className="fa-solid fa-cart-shopping"></i> Cart
                  <Badge className={`rounded ms-2 ${crt.length >0 ? 'bg-success' : 'bg-danger'}`}>
                    {crt.length}
                  </Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;
