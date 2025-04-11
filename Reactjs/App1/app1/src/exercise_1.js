import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
        <>
        <table className='table table-hover w-50 mx-auto mt-4'>
          <tbody>
            <tr>
              <th>Name :</th>
              <td>Yashvi Trivedi</td>
            </tr>
            <tr>
              <th>Contact Number :</th>
              <td>+91 - 9876543210</td>
            </tr>
          </tbody>
        </table>
        </>
);
root.render(output);