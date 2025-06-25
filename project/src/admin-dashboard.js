import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function Dashboard() {
    return (
        <div className="wrapper">
            <MyHeader/>
            <div className="page-content">
                {/* Start Container Fluid */}
                <div className="container-fluid">
                    {/* Start here.... */}
                    <div className="row">
                        <div className="col-md-6 col-lg-3 ">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="avatar-md bg-soft-primary rounded">
                                                <iconify-icon icon="solar:cart-5-bold-duotone" className="avatar-title fs-32 text-primary" />
                                            </div>
                                        </div> {/* end col */}
                                        <div className="col-6 text-end">
                                            <p className="text-muted mb-0 text-truncate">Total Orders</p>
                                            <h3 className="text-dark mt-1 mb-0">13, 647</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row*/}
                                </div>
                            </div> {/* end card */}
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="avatar-md bg-soft-primary rounded">
                                                <i className="bx bx-award avatar-title fs-24 text-primary" />
                                            </div>
                                        </div> {/* end col */}
                                        <div className="col-6 text-end">
                                            <p className="text-muted mb-0 text-truncate">New Leads</p>
                                            <h3 className="text-dark mt-1 mb-0">9, 526</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row*/}
                                </div> {/* end card body */}
                            </div> {/* end card */}
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="avatar-md bg-soft-primary rounded">
                                                <i className="bx bxs-backpack avatar-title fs-24 text-primary" />
                                            </div>
                                        </div>
                                        <div className="col-6 text-end">
                                            <p className="text-muted mb-0 text-truncate">Deals</p>
                                            <h3 className="text-dark mt-1 mb-0">976</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="avatar-md bg-soft-primary rounded">
                                                <i className="bx bx-dollar-circle avatar-title text-primary fs-24" />
                                            </div>
                                        </div>
                                        <div className="col-6 text-end">
                                            <p className="text-muted mb-0 text-truncate">Booked Revenue</p>
                                            <h3 className="text-dark mt-1 mb-0">Rs123.6k</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h4 className="card-title">Performance</h4>
                                        <div>
                                            <button type="button" className="btn btn-sm btn-outline-light">ALL</button>
                                            <button type="button" className="btn btn-sm btn-outline-light">1M</button>
                                            <button type="button" className="btn btn-sm btn-outline-light">6M</button>
                                            <button type="button" className="btn btn-sm btn-outline-light active">1Y</button>
                                        </div>
                                    </div> {/* end card-title*/}
                                    <div dir="ltr">
                                        <div id="dash-performance-chart" className="apex-charts" />
                                    </div>
                                </div> {/* end card body */}
                            </div> {/* end card */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Conversions</h5>
                                    <div id="conversions" className="apex-charts mb-2 mt-n2" />
                                    <div className="row text-center">
                                        <div className="col-6">
                                            <p className="text-muted mb-2">This Week</p>
                                            <h3 className="text-dark mb-3">23.5k</h3>
                                        </div> {/* end col */}
                                        <div className="col-6">
                                            <p className="text-muted mb-2">Last Week</p>
                                            <h3 className="text-dark mb-3">41.05k</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row */}
                                    <div className="text-center">
                                        <button type="button" className="btn btn-light shadow-none w-100">View
                                            Details</button>
                                    </div> {/* end row */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Sessions by Country</h5>
                                    <div id="world-map-markers" style={{ "height": "316px" }}>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-6">
                                            <p className="text-muted mb-2">This Week</p>
                                            <h3 className="text-dark mb-3">23.5k</h3>
                                        </div> {/* end col */}
                                        <div className="col-6">
                                            <p className="text-muted mb-2">Last Week</p>
                                            <h3 className="text-dark mb-3">41.05k</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row */}
                                </div>
                            </div> {/* end card*/}
                        </div>
                    </div>
                    {/* End Container Fluid */}
                    <MyFooter/>
                </div>
                {/* ==================================================== */}
                {/* End Page Content */}
                {/* ==================================================== */}
            </div>
            
        </div>
    );
}