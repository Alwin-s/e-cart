import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slice/wishlistslice';
import { addToCart } from '../redux/slice/cartslice';
import { ToastContainer, toast } from 'react-toastify';

function Wishlist() {
  const WishlistArray=useSelector((state)=>state.wishlistReducer);
    window.scrollTo(0, 0);
   const dispatch=useDispatch();

   const handleCart=(product)=>{
    toast.success("Added to cart successfully")
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id));
 
   }


  return (
    <div style={{marginTop:"0px",overflowX:"hidden",backgroundColor:"lightblue"}}>
      <Row className=' p-5' style={{ marginTop: "",display:"flex" }}>
        {
          WishlistArray.length>0?
          WishlistArray.map((product,index)=>(

            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem', height: "26rem" }}>
              <Card.Img variant="top" src={product?.thumbnail} height={200} style={{objectFit:"cover"}}/>
              <Card.Body>
                <Card.Title className='fw-bold text-primary'>{product?.title}</Card.Title>
                
                <Card.Text>
                  <p style={{textAlign:"justify"}}>{product?.description.slice(0,40)}...</p>
                  <h5 className='text-primary'>${product?.price}</h5>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button className='btn btn-light' onClick={()=>dispatch(removeFromWishlist(product.id))}><i className='fa-solid  fa-trash text-danger'></i></Button>
                  
                  <Button className='btn btn-light' onClick={()=>handleCart(product)}><i className='fa-solid  fa-cart-shopping text-warning'></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          )):<div style={{height:"100vh",marginTop:"-80px"}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img height={'500px'} width={'500px'} src="https://www.our-eshop.com/frontend/assets/images/no-wish-list.png" alt="" />
           
          <Link style={{textDecoration:"none"}} className='btn btn-warning rounded' to={'/'} >Back To Home</Link>
          </div>
        }
      </Row>
      <ToastContainer
        position='top-center'
        theme='dark'
        autoClose={500}
      />
    </div>
  )
}

export default Wishlist