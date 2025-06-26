import React from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './index.css';
import Login from './admin-login';
import Dashboard from './admin-dashboard';
import AdminProductList from './admin-product-list';
import AdminAddProduct from './admin-product-add';
import AdminEditProduct from './admin-product-edit';
import AdminSignup from './admin-register';
import AdminForgetPassword from './admin-forget-password';
import AdminCategoryList from './admin-category-list';
import AdminCategoryAdd from './admin-category-add';
import AdminCategoryEdit from './admin-category-edit';
import AdminOrderList from './admin-order-list';
import AdminOrderEdit from './admin-order-edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/product-list' element={<AdminProductList/>}/>
        <Route path='/product-add' element={<AdminAddProduct/>}/>
        <Route path='/product-edit' element={<AdminEditProduct/>}/>
        <Route path='/signup' element={<AdminSignup/>}/>
        <Route path='/forget-password' element={<AdminForgetPassword/>}/>
        <Route path='/category-list' element={<AdminCategoryList/>}/>
        <Route path='/category-add' element={<AdminCategoryAdd/>}/>
        <Route path='/category-edit' element={<AdminCategoryEdit/>}/>
        <Route path='/order-list' element={<AdminOrderList/>}/>
        <Route path='/order-edit' element={<AdminOrderEdit/>}/>
      </Routes>
    </BrowserRouter>
  );
}
root.render(
  <MyRouter/>
);