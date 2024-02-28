import React, { useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/wishlistslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../redux/slice/cartslice';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  const data = useFetch("https://dummyjson.com/products");
  const dispatch = useDispatch();

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    toast.success("Added to Wishlist");
  };

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product));
    toast.success("Added to Cart")
  }

  return (
    <div style={{ overflowX: 'hidden' }}>

<Carousel className='mt-2' >
      <Carousel.Item interval={1300}>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg" alt="" height={400} width={"100%"}  style={{objectFit:"inherit"}}/>
        <Carousel.Caption>
          <h3>Daily Needs </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1300}>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg" alt="" height={400} width={"100%"} style={{objectFit:"inherit"}}/>
        <Carousel.Caption>
          <h3>Fire-Boltt </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1300}>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jan24atf/unrec/citi/pc_2x._CB584618827_.jpg" 
      height={400} width={"100%"} style={{objectFit:"inherit"}}alt="" />
        <Carousel.Caption>
          <h3>T-shirts & Polos</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1300}>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/Feb/BOB/22._CB581967458_.jpg" 
      height={400} width={"100%"} style={{objectFit:"inherit"}}alt="" />
        <Carousel.Caption>
          <h3>Deals on clothing,Footware and more..</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <h2 className='text-center mt-5'>EXPLORE OUR PRODUCTS</h2>

      <Row className=' p-5' style={{ marginTop: "-22px", display: "flex", justifyContent: "space-evenly" }}>
        {data?.length > 0 ? data?.map((product, index) => (
          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem', height: "26rem" }}>
              <Card.Img variant="top" src={product?.thumbnail} height={200} style={{ objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className='fw-bold text-primary'>{product?.title}</Card.Title>
                <Card.Text>
                  <p style={{ textAlign: "justify" }}>{product?.description.slice(0, 40)}</p>
                  <h5 className='text-primary'>${product?.price}</h5>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button onClick={() => handleAddToWishlist(product)} className='btn btn-light'><i className='fa-solid  fa-heart text-danger'></i></Button>
                  <Button className='btn btn-light' onClick={()=>handleAddToCart(product)}><i className='fa-solid  fa-cart-shopping text-warning'></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )) : <p className='text-center'><i className="fa-solid fa-spinner fa-spin fa-2xl" style={{ color: "blue" }}></i></p>}
      </Row>
      <ToastContainer
        position='top-center'
        theme='dark'
        autoClose={500}
      />
    </div>
  );
}

export default Home;
