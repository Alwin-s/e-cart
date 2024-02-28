import './App.css';
import { Route ,Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Wishlist from "./Pages/Wishlist"
import Cart from "./Pages/Cart"
import Header from './Components/Header';
import Footer from './Components/Footer';
import './bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Wishlist' element={<Wishlist/>}/>
    <Route path='/Cart' element={<Cart/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
