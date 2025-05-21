import React from 'react';
import ReactDOM from 'react-dom/client';

// 11) create web application that has 4 buttons 
//         Mobile 
//         laptop 
//         TV
//         Camera
//     when user click on any one of the button display 4 products of selected button category (use conditional rendering)


// Product class for repeating design of products
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.image = props.image;
        this.price = props.price;
    }
    render() {
        return (
            <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <div className="card-header text-center text-bg-dark">
                        <h3>{this.name}</h3>
                    </div>
                    <div className='card-body'>
                        <img src={this.image} />
                    </div>
                    <div className='card-footer'>
                        <h6>{this.price}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

class WebApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ''
        }
    }

    showMobile = () => {
        this.setState({
            category: 'Mobile'
        });
        // alert('Mobile button pressed....');
    }

    showLaptop = () => {
        this.setState({
            category: 'Laptop'
        });
        // alert('Mobile button pressed....');
    }

    showTV = () => {
        this.setState({
            category: 'TV'
        });
        // alert('Mobile button pressed....');
    }

    showCamera = () => {
        this.setState({
            category: 'Camera'
        });
        // alert('Mobile button pressed....');
    }

    disMobile = () => {
        if (this.state.category == 'Mobile') {
            return (
                <>
                    <div className="mb-5">
                        <h4>Mobile Products</h4>
                        <div className="row">
                            <Product name="iPhone 14" image="https://picsum.photos/270?random=1" price="$1500" />
                            <Product name="Samsung Galaxy S23" image="https://picsum.photos/270?random=2" price="$150" />
                            <Product name="OnePlus 11" image="https://picsum.photos/270?random=3" price="$80" />
                            <Product name="Google Pixel 7" image="https://picsum.photos/270?random=4" price="$500" />
                        </div>
                    </div>
                </>
            );
        }
    }

    disLaptop = () => {
        if (this.state.category == 'Laptop') {
            return (
                <>
                    <div className="mb-5">
                        <h4>Laptop Products</h4>
                        <div className="row">
                            <Product name="Macbook" image="https://picsum.photos/270?random=5" price="$1500" />
                            <Product name="HP" image="https://picsum.photos/270?random=6" price="$150" />
                            <Product name="Samsung" image="https://picsum.photos/270?random=7" price="$80" />
                            <Product name="Asus" image="https://picsum.photos/270?random=8" price="$500" />
                        </div>
                    </div>
                </>
            );
        }
    }

    disTV = () => {
        if (this.state.category == 'TV') {
            return (
                <>
                    <div className="mb-5">
                        <h4>TV Products</h4>
                        <div className="row">
                            <Product name="Samsung OLED" image="https://picsum.photos/270?random=9" price="$1500" />
                            <Product name="LG Smart TV" image="https://picsum.photos/270?random=10" price="$150" />
                            <Product name="Sony Bravia" image="https://picsum.photos/270?random=11" price="$80" />
                            <Product name="TCL Roku TV" image="https://picsum.photos/270?random=12" price="$500" />
                        </div>
                    </div>
                </>
            );
        }
    }

    disCamera = () => {
        if (this.state.category == 'Camera') {
            return (
                <>
                    <div className="mb-5">
                        <h4>Camera Products</h4>
                        <div className="row">
                            <Product name="Canon EOS R5" image="https://picsum.photos/270?random=13" price="$1500" />
                            <Product name="Nikon Z6" image="https://picsum.photos/270?random=14" price="$150" />
                            <Product name="Sony Alpha A7 III" image="https://picsum.photos/270?random=15" price="$80" />
                            <Product name="Fujifilm X-T4" image="https://picsum.photos/270?random=16" price="$500" />
                        </div>
                    </div>
                </>
            );
        }
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <h2 className="text-center mb-4">Product Categories</h2>

                    <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
                        <button type="button" className="btn btn-primary" onClick={this.showMobile}>Mobile</button>
                        <button type="Laptop" className="btn btn-secondary" onClick={this.showLaptop}>Laptop</button>
                        <button type="TV" className="btn btn-success" onClick={this.showTV}>TV</button>
                        <button type="Camera" className="btn btn-danger" onClick={this.showCamera}>Camera</button>
                    </div>

                    {/* Mobile Products */}
                    <this.disMobile />

                    {/* Laptop Products */}
                    <this.disLaptop />

                    {/* TV Products */}
                    <this.disTV />

                    {/* Camera Products */}
                    <this.disCamera />

                </div>

            </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WebApp />);