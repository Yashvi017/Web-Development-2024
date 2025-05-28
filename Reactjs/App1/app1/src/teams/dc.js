import React from "react";
import { Link } from "react-router-dom";

export default class DelhiCapitals extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h2 className="mb-4">Delhi Capitals Players – IPL 2025</h2>
                <p className="text-end mb-3">
                    <Link className="btn btn-primary" to="/">Home</Link>
                </p>
                <ul className="list-group">
                    <li className="list-group-item">KL Rahul</li>
                    <li className="list-group-item">Jake Fraser-McGurk</li>
                    <li className="list-group-item">Karun Nair</li>
                    <li className="list-group-item">Faf du Plessis</li>
                    <li className="list-group-item">Donovan Ferreira</li>
                    <li className="list-group-item">Abishek Porel</li>
                    <li className="list-group-item">Tristan Stubbs</li>
                    <li className="list-group-item">Sameer Rizvi</li>
                    <li className="list-group-item">Ashutosh Sharma</li>
                    <li className="list-group-item">Axar Patel</li>
                    <li className="list-group-item">Kuldeep Yadav</li>
                    <li className="list-group-item">Mitchell Starc</li>
                    <li className="list-group-item">T Natarajan</li>
                    <li className="list-group-item">Mukesh Kumar</li>
                    <li className="list-group-item">Mohit Sharma</li>
                    <li className="list-group-item">Dushmantha Chameera</li>
                    <li className="list-group-item">Darshan Nalkande</li>
                    <li className="list-group-item">Vipraj Nigam</li>
                    <li className="list-group-item">Ajay Mandal</li>
                    <li className="list-group-item">Manvanth Kumar</li>
                    <li className="list-group-item">Tripurana Vijay</li>
                    <li className="list-group-item">Madhav Tiwari</li>
                    <li className="list-group-item">Harry Brook</li>
                </ul>
            </div>
        );
    }
}
