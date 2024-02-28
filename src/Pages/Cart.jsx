import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slice/cartslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import '../Pages/Kart.css';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  const [total, setTotal] = useState(0);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (cartArray.length > 0) {
      setTotal(
        cartArray
          .map((item) => item.price * (quantities[item.id] || 1))
          .reduce((p1, p2) => p1 + p2)
      );
    } else {
      setTotal(0);
    }
  }, [cartArray, quantities]);

  const handleCart = () => {
    setQuantities({});
    swal({
      title: 'Order Successfully placed',
      text: 'Continue Shopping !!',
      icon: 'success',
    }).then(() => {
      navigate('/');
    });
  };

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }));
  };

  return (
    <div style={{ marginTop: '50px', overflowX: 'hidden' }}>
      {cartArray.length > 0 ? (
        <div className="row text-center d-flex justify-content-center ">
          <div className="col-lg-8 ">
            <table className="table shadow rounded">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Product Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <br />
              <tbody>
                {cartArray.map((product, index) => (
                  <tr key={index}>
                    <td className="mt-3">{index + 1}</td>
                    <td>{product.title}</td>
                    <td>
                      <img width={'100px'} className="rounded" src={product.thumbnail} alt="" />
                    </td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="vttonb" onClick={() => handleDecrement(product.id)}>
                          -
                        </button>
                        <input
                        className='inputqty'
                          type="text"
                          value={quantities[product.id] || 1}
                          readOnly
                          style={{ width: '40px', height: '25px', textAlign: 'center', fontWeight: 'bold' }}
                        />
                        <button className="vtton" onClick={() => handleIncrement(product.id)}>
                          +
                        </button>
                      </div>
                    </td>
                    <td>$ {product.price * (quantities[product.id] || 1)}</td>
                    <td>
                      <Button onClick={() => dispatch(removeFromCart(product.id))} className="btn btn-light">
                        <i className="fa-solid  fa-trash text-danger"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ToastContainer position="top-center" theme="dark" autoClose={500} />
          </div>

          <div className="col-lg-3">
            <div className="border rounded shadow p-3 w-100">
              <h1 className="text-primary p-2"> Cart Summary</h1>

              <h4>
                Total Products: <span className="fw-bold">{cartArray.length}</span>
              </h4>
              <h4>
                Total: <span className="text-danger fw-bolder fs-2">$ {total}</span>
              </h4>
              <div className="d-grid">
                <button className="btn btn-success mt-5 rounded" onClick={handleCart}>
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: '100vh', marginTop: '-90px' }} className="w-100 d-flex flex-column justify-content-center align-items-center">
          <img height={'400px'} width={'400px'} src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" />
          <h2 className="text-danger">Cart is Empty!!</h2>
          <p className="fw-bold">Add some Items Here!</p>
          <Link style={{ textDecoration: 'none' }} className="btn btn-warning rounded" to={'/'}>
            Back To Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;