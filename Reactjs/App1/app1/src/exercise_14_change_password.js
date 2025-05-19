import React from 'react';
import ReactDOM from 'react-dom/client';

// 14) develop change password module using class components(controlled components approach)

class ChangePassword extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
    changedValue = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    getValue = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container align-items-center mt-5">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="card shadow p-4">
                            <h4 className="mb-4 text-center">Change Password</h4>
                            <form method="post" onSubmit={this.getValue}>
                                <div className="mb-3">
                                    <label htmlFor="oldPassword" className="form-label">Old Password</label>
                                    <input type="password" className="form-control" id="oldPassword" name="oldPassword" value={this.state.oldPassword} onChange={this.changedValue} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="newPassword" className="form-label">New Password</label>
                                    <input type="password" className="form-control" id="newPassword" name="newPassword" value={this.state.newPassword} onChange={this.changedValue} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={this.state.confirmPassword} onChange={this.changedValue} required />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark">Update Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChangePassword/>);