import { Link } from "react-router-dom";

export default function Login() {
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
                                    <h2 className="fw-bold fs-24 mb-3">Sign In</h2>
                                    <form className="authentication-form" action="./dashboard">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="example-email">Email</label>
                                            <input type="email" id="example-email" name="example-email" className="form-control bg-" placeholder="Enter your email" required />
                                        </div>
                                        <div className="mb-5">
                                            <label className="form-label" htmlFor="example-password">Password</label>
                                            <input type="text" id="example-password" className="form-control" placeholder="Enter your password" required />
                                            <Link to="/forget-password" className="float-end text-muted text-unline-dashed ms-1">
                                                Forget password?
                                            </Link>
                                        </div>
                                        <div className="mb-1 text-center d-grid">
                                            <button className="btn btn-soft-primary" type="submit">Sign In</button>
                                        </div>
                                    </form>
                                    <p className="text-danger text-center">Don't have an account? <Link to="/signup" className="text-dark fw-bold ms-1">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 d-none d-xxl-flex">
                        <div className="card h-100 mb-0 overflow-hidden">
                            <div className="d-flex flex-column h-100">
                                <img src="/admin/assets/images/small/img-10.jpg" alt className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}