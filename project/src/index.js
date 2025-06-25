import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './admin-login';
import Dashboard from './admin-dashboard';
import AdminProductList from './admin-product-list';
import AdminAddProduct from './admin-add-product';
import AdminEditProduct from './admin-edit-product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AdminEditProduct/>
);