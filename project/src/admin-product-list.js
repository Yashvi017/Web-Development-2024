import { Link } from "react-router-dom";
import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminProductList() {
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
                                    <Link to="/product-add">
                                        <button type="button" className="btn btn-sm btn-primary">
                                            Add Product
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <div className="table-responsive">
                                        <table className="table align-middle mb-0 table-hover table-centered">
                                            <thead className="bg-light-subtle">
                                                <tr>
                                                    <th>Product Name &amp; Size</th>
                                                    <th>Price</th>
                                                    <th>Stock</th>
                                                    <th>Category</th>
                                                    <th>Action</th>
                                                </tr>
                                                <tr>
                                                    <th>Sr No</th>
                                                    <th>Name</th>
                                                    <th>Photo</th>
                                                    <th>Price</th>
                                                    <th>Stock</th>
                                                    <th>Is Live</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Black T-shirt</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                                                <img src="/admin/assets/images/product/p-1.png" alt className="avatar-md" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>$80.00</td>
                                                    <td>
                                                        486
                                                    </td>
                                                    <td> Yes</td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            {/* <a href="#" className="btn btn-light btn-sm">
                                                                <iconify-icon icon="solar:eye-broken" className="align-middle fs-18" />
                                                            </a>
                                                            <a href="product_edit-admin.html" className="btn btn-soft-primary btn-sm">
                                                                <iconify-icon icon="solar:pen-2-broken" className="align-middle fs-18" />
                                                            </a> */}
                                                            <div className="d-flex gap-2">
                                                                {/* View button (non-navigational placeholder — update `to` if needed) */}
                                                                <Link to="#">
                                                                    <button type="button" className="btn btn-light btn-sm">
                                                                        <iconify-icon icon="solar:eye-broken" className="align-middle fs-18" />
                                                                    </button>
                                                                </Link>

                                                                {/* Edit product button */}
                                                                <Link to="/product-edit">
                                                                    <button type="button" className="btn btn-soft-primary btn-sm">
                                                                        <iconify-icon icon="solar:pen-2-broken" className="align-middle fs-18" />
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                            <button type="button" className="btn btn-soft-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteProductModal">
                                                                <iconify-icon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* end table-responsive */}
                                </div>
                                <div className="card-footer border-top">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-end mb-0">
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
                                            <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container Fluid */}
                {/* Delete Product Confirmation Modal */}
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
            </div>
            {/* ==================================================== */}
            {/* End Page Content */}
            {/* ==================================================== */}
        </div>
    );
}