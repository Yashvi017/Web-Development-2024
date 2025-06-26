import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminOrderEdit() {
    return (
        <div className="wrapper">
            <MyHeader/>
            <div className="page-content">
                {/* Start Container Fluid */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row w-100 align-items-center">
                                        <div className="col">
                                            <h4 className="card-title mb-0">Edit Order</h4>
                                        </div>
                                        <div className="col-auto">
                                            <a href="order_list-admin.html" className="btn btn-light btn-sm">
                                                Back
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {/* Edit Form Column */}
                                        <div className="col-md-12">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="orderId" className="form-label">Order Number</label>
                                                    <input type="text" className="form-control" id="orderId" defaultValue="#ORD12345" readOnly />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="customerName" className="form-label">Customer Name</label>
                                                    <input type="text" className="form-control" id="customerName" defaultValue="John Doe" readOnly />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="orderAmount" className="form-label">Order Amount</label>
                                                    <input type="number" className="form-control" id="orderAmount" defaultValue="150.75" step="0.01" readOnly />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="orderStatus" className="form-label">Status</label>
                                                    <select className="form-control" id="orderStatus" required>
                                                        <option value="Pending">Pending</option>
                                                        <option value="Processing">Processing</option>
                                                        <option value="Shipped">Shipped</option>
                                                        <option value="Delivered" selected>Delivered</option>
                                                        <option value="Cancelled">Cancelled</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="orderDate" className="form-label">Order Date</label>
                                                    <input type="date" className="form-control" id="orderDate" defaultValue="2025-06-20" readOnly />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Update Order</button>
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
            {/* ==================================================== */}
            {/* End Page Content */}
            {/* ==================================================== */}
        </div>
    );
}