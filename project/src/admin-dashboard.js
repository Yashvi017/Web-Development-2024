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
                                        <div className="col-4">
                                            <div className="avatar-md bg-soft-primary rounded">
                                                <iconify-icon icon="solar:cart-5-bold-duotone" className="avatar-title fs-32 text-primary" />
                                            </div>
                                        </div> {/* end col */}
                                        <div className="col-8">
                                            <p className="text-muted mb-0 text-truncate">Orders Today</p>
                                            <h3 className="text-dark mt-1 mb-0">10</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row*/}
                                </div>
                            </div> {/* end card */}
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="avatar-md bg-soft-primary rounded">
                                                <i className="bx bx-award avatar-title fs-24 text-primary" />
                                            </div>
                                        </div> {/* end col */}
                                        <div className="col-8">
                                            <p className="text-muted mb-0 text-truncate">Orders(Monthly)</p>
                                            <h3 className="text-dark mt-1 mb-0">20</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row*/}
                                </div> {/* end card body */}
                            </div> {/* end card */}
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="avatar-md bg-soft-primary rounded">
                                                <i className="bx bxs-backpack avatar-title fs-24 text-primary" />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <p className="text-muted mb-0 text-truncate">Orders(Quarterly)</p>
                                            <h3 className="text-dark mt-1 mb-0">90</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="avatar-md bg-soft-primary rounded">
                                                <i className="bx bx-dollar-circle avatar-title text-primary fs-24" />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <p className="text-muted mb-0 text-truncate">Orders(Yearly)</p>
                                            <h3 className="text-dark mt-1 mb-0">360</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-4 ">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="avatar-md bg-soft-primary rounded">
                                                <iconify-icon icon="solar:cart-5-bold-duotone" className="avatar-title fs-32 text-primary" />
                                            </div>
                                        </div> {/* end col */}
                                        <div className="col-8">
                                            <p className="text-muted mb-0 text-truncate">Products</p>
                                            <h3 className="text-dark mt-1 mb-0">10</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row*/}
                                </div>
                            </div> {/* end card */}
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="avatar-md bg-soft-primary rounded">
                                                <i className="bx bx-award avatar-title fs-24 text-primary" />
                                            </div>
                                        </div> {/* end col */}
                                        <div className="col-8">
                                            <p className="text-muted mb-0 text-truncate">Categories</p>
                                            <h3 className="text-dark mt-1 mb-0">3</h3>
                                        </div> {/* end col */}
                                    </div> {/* end row*/}
                                </div> {/* end card body */}
                            </div> {/* end card */}
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="avatar-md bg-soft-primary rounded">
                                                <i className="bx bxs-backpack avatar-title fs-24 text-primary" />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <p className="text-muted mb-0 text-truncate">Users</p>
                                            <h3 className="text-dark mt-1 mb-0">200</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
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