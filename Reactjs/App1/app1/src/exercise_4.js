import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

{/*4) create bootstrap 5 website that will display 12 products responsively using functional components 
    each product should have
        Name, 
        Photo 
        Price 
        Size 
        Weight

5) Create your resume using class components*/}

const root = ReactDOM.createRoot(document.getElementById('root'));

function Productlist(props) {
  return (

    <div className="col-3 mb-5">
      <div className="card h-100">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInzI69QTfhKGZZJSTKjbTAdI4ZeJ5fhSBBw&s" className="card-img-top" alt="Product Image" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Price:</strong> {props.price}</li>
            <li className="list-group-item"><strong>Size:</strong>{props.size}</li>
            <li className="list-group-item"><strong>Weight:</strong>{props.weight}</li>
          </ul>
          <div className="mt-3 text-center">
            <a href="#" className="btn btn-success w-100">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
}
function Product() {
  return (
    <div className="container my-5">
      <div className="row justify-content">

        <Productlist name='Elegant Wooden Chair' price='$49.99' size='40cm x 40cm x 90cm' weight='7.5 kg' />
        <Productlist name='T-Shirt' price=' ₹799' size='Medium' weight='250gr' />
        <Productlist name='Laptop' price=' ₹79,999' size='Medium' weight='2.5kg' />
        <Productlist name='Water Bottle' price=' ₹349' size='1L' weight='2.5gr' />
        <Productlist name='Smartphone' price=' ₹1,50,000' size='Medium' weight='230gr' />
        <Productlist name='Bagpack' price=' ₹1000' size='small' weight='500grm' />
        <Productlist name='Smart Watch' price=' ₹5000' size='small' weight='250grm' />
        <Productlist name='Wrist Watch' price=' ₹1500' size='small' weight='100grm' />
        <Productlist name='Coffee Mug' price=' ₹350' size='300ml' weight='300grm' />
        <Productlist name='Notebook' price=' ₹89' size='A4' weight='180g' />

      </div>
    </div>
  );
}

root.render(<Product />);