import React from 'react';
import ReactDOM from 'react-dom/client';

// 13) develop register module using class components(controlled components approach)

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    changedValue = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
        // console.log(this.state);
    }
    setValue = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <div className="col-6 offset-3 mt-5">
                    <div className="card register-card p-4">
                        <h2 className="text-center mb-4">Register</h2>
                        <form method="post" onSubmit={this.setValue}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" name="fullname" value={this.state.fullname} onChange={this.changedValue} required />
                                <div className="invalid-feedback">
                                    Please enter your full name.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.changedValue} required />
                                <div className="invalid-feedback">
                                    Please enter a valid email address.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" name="password" required minLength={6} value={this.state.password} onChange={this.changedValue} />
                                <div className="invalid-feedback">
                                    Password must be at least 6 characters long.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required  name="confirmPassword" minLength={6} value={this.state.confirmPassword} onChange={this.changedValue} />
                                <div className="invalid-feedback">
                                    Passwords do not match.
                                </div>
                            </div>
                            <div className="col-12 d-flex">
                                <button type="submit" className="btn btn-dark w-50">Register</button>
                                <button type="reset" className="btn btn-light w-50">Clear all</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Register/>);