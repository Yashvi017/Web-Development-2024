import { Link } from "react-router-dom";
import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminProductView() {
    return (
        <div className="wrapper">
            <MyHeader />
            <div className="page-content">
                {/* Start Container Fluid */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center gap-1">
                                    <h4 className="card-title flex-grow-1">Product Management</h4>
                                    <Link to="/product-list" className="btn btn-light btn-sm">
                                        Back
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {/* Left Column: Image + Buttons */}
                                        <div className="col-md-5 mb-4">
                                            <div className="card">
                                                <img src="./admin/assets/images/product/p-1.png" className="card-img-top" alt="Product Image" />
                                                {/* <div className="card-body text-center">
                                                    <Link to="/product-edit">
                                                        <button type="button" className="btn btn-soft-primary btn-sm">
                                                            <iconify-icon icon="solar:pen-2-broken" className="align-middle fs-18" />
                                                        </button>
                                                    </Link>
                                                    &nbsp;&nbsp;
                                                    <button type="button" className="btn btn-soft-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteProductModal">
                                                        <iconify-icon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" />
                                                    </button>
                                                </div> */}
                                            </div>
                                        </div>
                                        {/* Right Column: Product Details Table */}
                                        <div className="col-md-7">
                                            <div className="card p-4">
                                                <table className="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" style={{ "width": "30%" }}>ID</th>
                                                            <td>P001</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Name</th>
                                                            <td>Sample Product</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Price</th>
                                                            <td>₹999</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Stock</th>
                                                            <td>25 units</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Weight</th>
                                                            <td>1.2 kg</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Size</th>
                                                            <td>Medium</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Is Live</th>
                                                            <td>Yes</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Details</th>
                                                            <td>This is a sample product used for display purposes.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="deleteProductModal" tabIndex={-1} aria-labelledby="deleteProductModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-danger">
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="deleteProductModalLabel">Confirm Deletion
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete <strong>Black T-shirt</strong>?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ========== Footer Start ========== */}
                <MyFooter />
                {/* ========== Footer End ========== */}
                {/* End Container Fluid */}

                {/* ==================================================== */}
                {/* End Page Content */}
                {/* ==================================================== */}
            </div>
        </div>
    );
}