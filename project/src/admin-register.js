import { Link } from "react-router-dom";

export default function AdminSignup() {
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
                                    <h2 className="fw-bold fs-24 mb-3">Sign Up</h2>
                                    <div>
                                        <form action="./login-admin.html" className="authentication-form">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="example-name">Name</label>
                                                <input type="name" id="example-name" name="example-name" className="form-control" placeholder="Enter your name" required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="example-email">Email</label>
                                                <input type="email" id="example-email" name="example-email" className="form-control bg-" placeholder="Enter your email" required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="example-password">Password</label>
                                                <input type="text" id="example-password" className="form-control" placeholder="Enter your password" required />
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkbox-signin" required />
                                                    <label className="form-check-label" htmlFor="checkbox-signin">I accept Terms and
                                                        Condition</label>
                                                </div>
                                            </div>
                                            <div className="mb-3 text-center d-grid">
                                                <button className="btn btn-soft-primary" type="submit">Sign Up</button>
                                            </div>
                                            <p className="mt-auto text-danger text-center">I already have an account <Link to="/" className="text-dark fw-bold ms-1">
                                                Sign In
                                            </Link></p>
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