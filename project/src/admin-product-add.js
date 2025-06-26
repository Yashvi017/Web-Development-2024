import { Link } from "react-router-dom";
import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminAddProduct() {
    return (
        <div className="wrapper">
            <MyHeader/>
            <div className="page-content">
                {/* Start Container Fluid */}
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row w-100 align-items-center">
                                        <div className="col">
                                            <h4 className="card-title mb-0">Add Product</h4>
                                        </div>
                                        <div className="col-auto">
                                            <Link to="/product-list" className="btn btn-light btn-sm">
                                                Back
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="productName" className="form-label">Product Name</label>
                                                <input type="text" className="form-control" id="productName" placeholder="Enter product name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="productSize" className="form-label">Size</label>
                                                <input type="text" className="form-control" id="productSize" placeholder="e.g., M, L, XL or 500ml" required />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-4">
                                                <label htmlFor="productPrice" className="form-label">Price (₹)</label>
                                                <input type="number" className="form-control" id="productPrice" placeholder="Enter price" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="productStock" className="form-label">Stock</label>
                                                <input type="number" className="form-control" id="productStock" placeholder="Enter stock quantity" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="productCategory" className="form-label">Category</label>
                                                <select className="form-select" id="productCategory" required>
                                                    <option value selected disabled>Select category</option>
                                                    <option value="clothing">Clothing</option>
                                                    <option value="electronics">Electronics</option>
                                                    <option value="grocery">Grocery</option>
                                                    <option value="stationery">Stationery</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="productImage" className="form-label">Product Image</label>
                                            <input className="form-control" type="file" id="productImage" accept="image/*" required />
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-end">
                                            <button type="reset" className="btn btn-outline-primary">Clear all</button>
                                            &nbsp;&nbsp;
                                            <button type="submit" className="btn btn-primary">Add Product</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container Fluid */}
                {/* ========== Footer Start ========== */}
                <MyFooter/>
                {/* ========== Footer End ========== */}
            </div>
        </div>
    );
}