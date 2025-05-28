import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

//16) call below api using class components and fetch method 
// https://jsonplaceholder.typicode.com/albums

class APIExe extends React.Component {
    constructor(props) {
        super(props);
        //create state object
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        //api calling 
        let apiAddress = "https://jsonplaceholder.typicode.com/albums";
        fetch(apiAddress).then((response) => response.json()).then((data) => {
            console.log(data);
            this.setState({
                albums: data
            });

        }).catch((error) => {
            alert('data could not fetch');
        });
    }

    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <div className="card">
                        <div className="card-header text-center text-bg-primary">
                            <h3>Album</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th width="10%">userID</th>
                                        <th width="10%">ID</th>
                                        <th width="80%">Title </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.albums.map((item) => {
                                        return (<tr>
                                            <td>{item.userId}</td>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                        </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<APIExe />);