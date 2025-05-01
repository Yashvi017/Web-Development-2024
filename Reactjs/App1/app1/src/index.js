import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//  7)Create reactjs user interface for Hotel to get information about occupied and available room. each room has 
//     No, Floor, RoomType (Deluxe, Super Deluxe), and status(1=occupied,2=available). 
//     there should be button to change status of room 

//     use property variable for No, Floor, RoomType and state variable for status 


class Hotel extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container mt-5">
                <h2 className="mb-4">Hotel Room Information</h2>
                <table className="table table-bordered room-table">
                    <thead className="table-dark">
                        <tr>
                            <th>No</th>
                            <th>Floor</th>
                            <th>Room Type</th>
                            <th>Status</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>101</td>
                            <td>1</td>
                            <td>Deluxe</td>
                            <td>Occupied</td>
                            <td>
                                <form method="POST" action="/change-status">
                                    <input type="hidden" name="room_no" defaultValue={101} />
                                    <button type="submit" className="btn btn-occupied">Occupied</button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td>1</td>
                            <td>Super Deluxe</td>
                            <td>Available</td>
                            <td>
                                <form method="POST" action="/change-status">
                                    <input type="hidden" name="room_no" defaultValue={102} />
                                    <button type="submit" className="btn btn-available">Available</button>
                                </form>
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hotel/>);