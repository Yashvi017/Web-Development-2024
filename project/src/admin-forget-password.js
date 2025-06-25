export default function AdminForgetPassword() {
    return (
        <div className="d-flex flex-column h-100 p-3">
            <div className="d-flex flex-column flex-grow-1">
                <div className="row h-100">
                    <div className="col-xxl-7">
                        <div className="row justify-content-center h-100">
                            <div className="col-lg-6 py-lg-5">
                                <div className="d-flex flex-column h-100 justify-content-center">
                                    <div className="auth-logo mb-4">
                                        <img src="/admin/assets/images/logo-dark.png" height={24} alt="logo dark" />
                                    </div>
                                    <h2 className="fw-bold fs-24">Forgot Password</h2>
                                    <p className="text-muted mt-1 mb-4">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                                    <div>
                                        <form action="./dashboard-admin.html" className="authentication-form">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="example-email">Email</label>
                                                <input type="email" id="example-email" name="example-email" className="form-control" placeholder="Enter your email" required />
                                            </div>
                                            <div className="mb-3 text-center d-grid">
                                                <button className="btn btn-primary" type="submit">Reset Password</button>
                                            </div>
                                            <p className="text-danger text-center">Back to<a href="login-admin.html" className="text-dark fw-bold ms-1">Sign In</a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 d-none d-xxl-flex">
                        <div className="card h-100 mb-0 overflow-hidden">
                            <div className="d-flex flex-column h-100">
                                <img src="/admin/assets/images/small/img-10.jpg" alt className="w-100 h-100" />
                            </div>
                        </div> {/* end card */}
                    </div>
                </div>
            </div>
        </div>
    );
}