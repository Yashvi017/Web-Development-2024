import React from "react";
import { Link } from "react-router-dom";

export default class ChennaiSuperKings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h2 className="mb-4">Chennai Super Kings Players – IPL 2025</h2>
                <p className="text-end mb-3">
                    <Link className="btn btn-primary" to="/">Home</Link>
                </p>
                <ul className="list-group">
                    <li className="list-group-item">MS Dhoni</li>
                    <li className="list-group-item">Ravindra Jadeja</li>
                    <li className="list-group-item">Shivam Dube</li>
                    <li className="list-group-item">Devon Conway</li>
                    <li className="list-group-item">Rahul Tripathi</li>
                    <li className="list-group-item">Rachin Ravindra</li>
                    <li className="list-group-item">Sam Curran</li>
                    <li className="list-group-item">Deepak Hooda</li>
                    <li className="list-group-item">Vijay Shankar</li>
                    <li className="list-group-item">Shaik Rasheed</li>
                    <li className="list-group-item">Ayush Mhatre</li>
                    <li className="list-group-item">Andre Siddarth</li>
                    <li className="list-group-item">Ramakrishna Ghosh</li>
                    <li className="list-group-item">Shreyas Gopal</li>
                    <li className="list-group-item">Ravichandran Ashwin</li>
                    <li className="list-group-item">Matheesha Pathirana</li>
                    <li className="list-group-item">Khaleel Ahmed</li>
                    <li className="list-group-item">Mukesh Choudhary</li>
                    <li className="list-group-item">Kamlesh Nagarkoti</li>
                    <li className="list-group-item">Anshul Kamboj</li>
                    <li className="list-group-item">Nathan Ellis</li>
                    <li className="list-group-item">Jamie Overton</li>
                    <li className="list-group-item">Noor Ahmad</li>
                    <li className="list-group-item">Dewald Brevis</li>
                    <li className="list-group-item">Urvil Patel</li>
                </ul>
            </div>
        );
    }
}
