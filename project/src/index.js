import React from 'react';
import ReactDOM from 'react-dom/client';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AdminCategoryEdit/>
);