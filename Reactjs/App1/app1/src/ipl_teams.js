import React from "react";

export default class teams extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        returnd(
            <div className="container py-5">
                <div className="row justify-content-center g-4">
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                Chennai Super Kings
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                Mumbai Indians
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                Royal Challengers Bangalore
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                Kolkata Knight Riders
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                Rajasthan Royals
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                Delhi Capitals
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                Punjab Kings
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                Sunrisers Hyderabad
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                Gujarat Titans
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card text-center border shadow">
                            <div className="card-body">
                                Lucknow Super Giants
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}