import React from "react";
import { Link } from "react-router-dom";

export default class GujaratTitans extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h2 className="mb-4">Gujarat Titans Players – IPL 2025</h2>
                <p className="text-end mb-3">
                    <Link className="btn btn-primary" to="/">Home</Link>
                </p>
                <ul className="list-group">
                    <li className="list-group-item">Shubman Gill</li>
                    <li className="list-group-item">Jos Buttler</li>
                    <li className="list-group-item">Sai Sudharsan</li>
                    <li className="list-group-item">Shahrukh Khan</li>
                    <li className="list-group-item">Glenn Phillips</li>
                    <li className="list-group-item">Rahul Tewatia</li>
                    <li className="list-group-item">Mahipal Lomror</li>
                    <li className="list-group-item">Rashid Khan</li>
                    <li className="list-group-item">Washington Sundar</li>
                    <li className="list-group-item">Kagiso Rabada</li>
                    <li className="list-group-item">Mohammed Siraj</li>
                    <li className="list-group-item">Prasidh Krishna</li>
                    <li className="list-group-item">Sherfane Rutherford</li>
                    <li className="list-group-item">Yash Dayal</li>
                    <li className="list-group-item">Kumar Kushagra</li>
                </ul>
            </div>
        );
    }
}
