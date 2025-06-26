import { Link } from "react-router-dom";
import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminEditProduct() {
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
                                            <h4 className="card-title mb-0">Edit Product</h4>
                                        </div>
                                        <div className="col-auto">
                                            <Link to="/product-list" className="btn btn-light btn-sm">
                                                Back
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label d-block">Current Product Image</label>
                                                <img id="previewImage" src="/admin/assets/images/product/p-1.png" alt="Current Product Image" className="img-thumbnail mb-2" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <form>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <label htmlFor="productName" className="form-label">Product Name</label>
                                                        <input type="text" className="form-control" id="productName" defaultValue="Men Black Slim Fit T-shirt" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="productSize" className="form-label">Size</label>
                                                        <input type="text" className="form-control" id="productSize" defaultValue="M" required />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <label htmlFor="productPrice" className="form-label">Price (₹)</label>
                                                        <input type="number" className="form-control" id="productPrice" defaultValue={800} required />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="productStock" className="form-label">Stock</label>
                                                        <input type="number" className="form-control" id="productStock" defaultValue={50} required />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="productCategory" className="form-label">Category</label>
                                                        <select className="form-select" id="productCategory" required>
                                                            <option value disabled>Select category</option>
                                                            <option value="clothing" selected>Clothing</option>
                                                            <option value="electronics">Electronics</option>
                                                            <option value="grocery">Grocery</option>
                                                            <option value="stationery">Stationery</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="productImage" className="form-label">Change Product
                                                        Image</label>
                                                    <input className="form-control" type="file" id="productImage" accept="image/*" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-end">
                                        <button type="reset" className="btn btn-outline-primary">Reset</button>
                                        &nbsp;&nbsp;
                                        <button type="submit" className="btn btn-primary">Update Product</button>
                                    </div>
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