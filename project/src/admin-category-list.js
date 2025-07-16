import { Link } from "react-router-dom";
import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminCategoryList() {
    return (
        <div className="wrapper">
            <MyHeader />
            <div className="page-content">
                {/* Start Container Fluid */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center gap-1">
                                    <h4 className="card-title flex-grow-1">Category List</h4>
                                    <Link to="/category-add">
                                        <button className="btn btn-sm btn-primary">
                                            Add Category
                                        </button>
                                    </Link>

                                </div>
                                <div>
                                    <div className="table-responsive">
                                        <table className="table align-middle mb-0 table-hover table-centered">
                                            <thead className="bg-light-subtle">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Photo</th>
                                                    <th>Is live</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Phone</td>
                                                    <td>
                                                        <img src="https://picsum.photos/100"/>
                                                    </td>
                                                    <td>Yes</td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <Link to="/category-edit">
                                                                <button className="btn btn-soft-primary btn-sm">
                                                                    <iconify-icon icon="solar:pen-2-broken" className="align-middle fs-18" />
                                                                </button>
                                                            </Link>
                                                            <button type="button" className="btn btn-soft-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                                <iconify-icon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* Add more rows as needed */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-footer border-top">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-end mb-0">
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
                                            <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container Fluid */}
                {/* Delete Confirmation Modal */}
                <div className="modal fade" id="deleteModal" tabIndex={-1} aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-danger">
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="deleteModalLabel">Confirm Deletion</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete <strong>Fashion</strong>?
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