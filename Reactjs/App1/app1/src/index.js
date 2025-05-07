import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status, 
    };
  }

  updateStatus = () => {
    let newStatus = this.state.status === 'Available' ? 'Occupied' : 'Available';
    this.setState({ status: newStatus });
  };

  render() {
    let buttonClass = this.state.status === 'Occupied' ? 'btn btn-danger' : 'btn btn-success';

    return (
      <tr>
        <td>{this.props.no}</td>
        <td>{this.props.floor}</td>
        <td>{this.props.roomtype}</td>
        <td>{this.state.status}</td>
        <td>
          <button type="button" className={buttonClass} onClick={this.updateStatus}>
            {this.state.status === 'Available' ? 'Available' : 'Occupied'}
          </button>
        </td>
      </tr>
    );
  }
}

class Hotel extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Hotel Room Information</h2>
            <table className="table table-bordered">
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
                <Room no="101" floor="1" roomtype="Deluxe" status="Occupied" />
                <Room no="102" floor="1" roomtype="Super Deluxe" status="Available" />
                <Room no="103" floor="1" roomtype="Super Deluxe" status="Available" />
                <Room no="104" floor="1" roomtype="Super Deluxe" status="Available" />
                <Room no="201" floor="2" roomtype="Deluxe" status="Occupied" />
                <Room no="202" floor="2" roomtype="Super Deluxe" status="Occupied" />
                <Room no="203" floor="2" roomtype="Deluxe" status="Occupied" />
                <Room no="204" floor="2" roomtype="Deluxe" status="Available" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hotel />);
