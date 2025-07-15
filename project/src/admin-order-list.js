import { Link } from "react-router-dom";
import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminOrderList() {
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
                                    <h4 className="card-title flex-grow-1">Order Management</h4>
                                </div>
                                <div>
                                    <div className="table-responsive">
                                        <table className="table align-middle mb-0 table-hover table-centered">
                                            <thead className="bg-light-subtle">
                                                <tr>
                                                    <th>Order Number</th>
                                                    <th>Date</th>
                                                    <th>Amount</th>
                                                    <th>Delivery Detail</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#ORD12345</td>
                                                    <td>2025-06-20</td>
                                                    <td>$150.75</td>
                                                    <td>Bhavnagar - 364008</td>
                                                    <td><span className="badge bg-success">Delivered</span></td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <Link to="/order-view">
                                                                <button type="button" className="btn btn-light btn-sm">
                                                                    <iconify-icon icon="solar:eye-broken" className="align-middle fs-18" />
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* Add more rows as needed for other orders */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container Fluid */}
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