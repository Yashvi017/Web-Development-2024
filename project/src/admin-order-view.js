import { Link } from "react-router-dom";
import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminOrderView() {
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
                                    <h4 className="card-title flex-grow-1">Order Management</h4>
                                    <Link to="/order-list" className="btn btn-light btn-sm">
                                        Back
                                    </Link>
                                    <Link to="/order-print">
                                        <button className="btn btn-sm btn-success">
                                            Print
                                        </button>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div>
                                                <div className="table-responsive">
                                                    <table className="table table-striped table-striped-column align-middle">
                                                        <tbody>
                                                            <tr>
                                                                <td>Name</td>
                                                                <td><input type="text" className="form-control" id="name" defaultValue="Yashvi Trivedi" readOnly /></td>
                                                                <td>ID</td>
                                                                <td><input type="text" className="form-control" id="id" defaultValue="John Doe" readOnly /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Address</td>
                                                                <td>
                                                                    <input type="text" className="form-control" id="address" defaultValue="301-Eva Surbhi Complex, Waghavadi Road" readOnly /></td>
                                                                <td>Date</td>
                                                                <td><input type="date" className="form-control" id="date" defaultValue="2025-06-20" readOnly /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>City</td>
                                                                <td><input type="text" className="form-control" id="city" defaultValue="Bhavnagar" readOnly /></td>
                                                                <td>Status</td>
                                                                <td>
                                                                    <div className="row">
                                                                        <div className="col-8">
                                                                            <select className="form-select" id="status" required>
                                                                                <option value="Pending">Pending</option>
                                                                                <option value="Processing">Processing</option>
                                                                                <option value="Shipped">Shipped</option>
                                                                                <option value="Delivered" selected>Delivered</option>
                                                                                <option value="Cancelled">Cancelled</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="col-4">
                                                                            <button type="submit" className="btn btn-primary">Update Order</button>    
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Pincode</td>
                                                                <td><input type="text" className="form-control" id="pincode" defaultValue="364008" readOnly /></td>
                                                                <td>Payment Mode</td>
                                                                <td><input type="text" className="form-control" id="paymentMode" defaultValue="Online" readOnly /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Remarks</td>
                                                                <td><input type="text" className="form-control" id="remarks" defaultValue="-" readOnly /></td>
                                                                <td>Mobile No.</td>
                                                                <td><input type="tel" className="form-control" id="mobileNo" defaultValue="+91-9876543210" readOnly /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <h4 className="mb-3 mt-5">Order Details </h4>

                                                    <table className="table table-bordered table-striped table-striped-column align-middle">
                                                        <thead>
                                                            <th>Sr No</th>
                                                            <th>Product ID</th>
                                                            <th>Name</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>Total</th>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1011</td>
                                                                <td>iPhone 16 pro max</td>
                                                                <td>1,50,000</td>
                                                                <td>1</td>
                                                                <td>1,50,000</td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th colSpan='5'>Grand Total</th>
                                                                <th>1,50,000</th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>

                                                {/* <div className="col-12 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary">Update Order</button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
        </div >
    );
}