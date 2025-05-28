import React from "react";
import { Link } from "react-router-dom";

export default class RoyalChallengersBengaluru extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h2 className="mb-4">Royal Challengers Bengaluru Players – IPL 2025</h2>
                <p className="text-end mb-3">
                    <Link className="btn btn-primary" to="/">Home</Link>
                </p>
                <ul className="list-group">
                    <li className="list-group-item">Virat Kohli</li>
                    <li className="list-group-item">Rajat Patidar</li>
                    <li className="list-group-item">Phil Salt</li>
                    <li className="list-group-item">Jitesh Sharma</li>
                    <li className="list-group-item">Swastik Chikara</li>
                    <li className="list-group-item">Tim Seifert</li>
                    <li className="list-group-item">Mayank Agarwal</li>
                    <li className="list-group-item">Liam Livingstone</li>
                    <li className="list-group-item">Krunal Pandya</li>
                    <li className="list-group-item">Swapnil Singh</li>
                    <li className="list-group-item">Tim David</li>
                    <li className="list-group-item">Romario Shepherd</li>
                    <li className="list-group-item">Manoj Bhandage</li>
                    <li className="list-group-item">Josh Hazlewood</li>
                    <li className="list-group-item">Bhuvneshwar Kumar</li>
                    <li className="list-group-item">Rasikh Salam</li>
                    <li className="list-group-item">Yash Dayal</li>
                    <li className="list-group-item">Nuwan Thushara</li>
                    <li className="list-group-item">Lungi Ngidi</li>
                    <li className="list-group-item">Abhinandan Singh</li>
                    <li className="list-group-item">Suyash Sharma</li>
                    <li className="list-group-item">Jacob Bethell</li>
                    <li className="list-group-item">Mohit Rathee</li>
                    <li className="list-group-item">Devdutt Padikkal</li>
                </ul>
            </div>
        );
    }
}
