import React from "react";
import { Link } from "react-router-dom";

export default class MumbaiIndians extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h2 className="mb-4">Mumbai Indians Players – IPL 2025</h2>
                <p className="text-end mb-3">
                    <Link className="btn btn-primary" to="/">Home</Link>
                </p>
                <ul className="list-group">
                    <li className="list-group-item">Rohit Sharma</li>
                    <li className="list-group-item">Suryakumar Yadav</li>
                    <li className="list-group-item">Tilak Varma</li>
                    <li className="list-group-item">Bevon Jacobs</li>
                    <li className="list-group-item">Ryan Rickelton</li>
                    <li className="list-group-item">Robin Minz</li>
                    <li className="list-group-item">Krishnan Shrijith</li>
                    <li className="list-group-item">Hardik Pandya</li>
                    <li className="list-group-item">Naman Dhir</li>
                    <li className="list-group-item">Raj Angad Bawa</li>
                    <li className="list-group-item">Vignesh Puthur</li>
                    <li className="list-group-item">Will Jacks</li>
                    <li className="list-group-item">Mitchell Santner</li>
                    <li className="list-group-item">Jasprit Bumrah</li>
                    <li className="list-group-item">Arjun Tendulkar</li>
                    <li className="list-group-item">Ashwani Kumar</li>
                    <li className="list-group-item">Allah Mohammad Ghazanfar</li>
                    <li className="list-group-item">Reece Topley</li>
                    <li className="list-group-item">Lizaad Williams</li>
                    <li className="list-group-item">Karn Sharma</li>
                    <li className="list-group-item">Trent Boult</li>
                    <li className="list-group-item">Deepak Chahar</li>
                    <li className="list-group-item">Satyanarayana Raju</li>
                    <li className="list-group-item">Mujeeb Ur Rahman</li>
                </ul>
            </div>
        );
    }
}
