import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Product from './Component/Product/Product';
import Home from './Component/Home/Home';
import Cart from './Component/Cart/Cart';
import SeeMore from './Component/SeeMore/SeeMore';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/seemore' element={<SeeMore />} />
      </Routes>
    </>
  );
}

export default App;
