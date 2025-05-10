import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 11) create web application that has 4 buttons 
//         Mobile 
//         laptop 
//         TV
//         Camera
//     when user click on any one of the button display 4 products of selected button category (use conditional rendering)

class WebApp extends React.Component {
  constructor(props) {
    super(props);
  }

  showMobile = () =>{

  }
  render() {
    return (
      <div className="container py-5">
        {/* <h1 className="text-center mb-4">Device Selection</h1> */}
        <div className="d-grid gap-3 col-6 mx-auto">
          <button type="button" className="btn btn-primary" onClick={this.showMobile}>Mobile</button>
          <button type="button" className="btn btn-secondary">Laptop</button>
          <button type="button" className="btn btn-success">TV</button>
          <button type="button" className="btn btn-danger">Camera</button>
        </div>

        <div>
          {/* Product Cards by Category */}
          <div className="row mt-5 mb-5">
            <h3>Mobile</h3>
            <div className="row">
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">iPhone 14</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">Samsung Galaxy S23</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">OnePlus 11</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">Google Pixel 7</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5 mt-5">
            <h3>Laptop</h3>
            <div className="row">
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">MacBook Air</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">Dell XPS 13</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">HP Spectre x360</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">Lenovo ThinkPad</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5 mt-5">
            <h3>TV</h3>
            <div className="row">
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">Samsung OLED</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">LG Smart TV</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">Sony Bravia</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">TCL Roku TV</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5 mt-5">
            <h3>Camera</h3>
            <div className="row">
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">Canon EOS R5</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">Nikon Z6</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">Sony Alpha A7 III</div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">Fujifilm X-T4</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WebApp />);
