import React from "react";
import { Link } from "react-router-dom";

export default class Teams extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div className="container py-5">
                <div className="row justify-content-center g-4">
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                <Link to="/csk">Chennai Super Kings</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                <Link to="/mi">Mumbai Indians</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                <Link to="/rcb">Royal Challengers Bangalore</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                <Link to="/dc">Delhi Capitals</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                <Link to="/gt">Gujarat Titans</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}