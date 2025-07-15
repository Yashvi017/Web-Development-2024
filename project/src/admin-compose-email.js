import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminComposeEmail() {
    return (
        <div className="wrapper">
            <MyHeader />
            <div className="page-content">
                {/* Start Container Fluid */}
                <div className="container-fluid">
                    {/* Start here.... */}

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center gap-1">
                                    <h4 className="card-title flex-grow-1">User Management</h4>
                                </div>
                                <div className="card-body">
                                    <h5 className="mb-3">Compose Mail</h5>
                                    <form action className="email-form">
                                        <div className="mb-3">
                                            <label htmlFor="recipient" className="form-label">To</label>
                                            <input type="email" className="form-control" id="recipient" readOnly required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="subject" className="form-label">Subject</label>
                                            <input type="text" className="form-control" id="subject" placeholder="Enter subject" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Message</label>
                                            <textarea className="form-control" id="message" rows={10} placeholder="Type your message here..." required defaultValue={""} />
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary btn-send">Send</button>
                                            &nbsp;
                                            <button type="button" className="btn btn-outline-secondary">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End Container Fluid */}
                    <MyFooter />
                </div>
                {/* ==================================================== */}
                {/* End Page Content */}
                {/* ==================================================== */}
            </div>

        </div>
    );
}