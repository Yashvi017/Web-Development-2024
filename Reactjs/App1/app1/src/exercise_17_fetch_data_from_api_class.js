import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

//17) call below api using class components and fetch method 
    // https://jsonplaceholder.typicode.com/comments

class APIExe extends React.Component {
    constructor(props) {
        super(props);
        //create state object
        this.state = {
            comments: []
        }
    }


    componentDidMount() {
        //api calling 
        let apiAddress = "https://jsonplaceholder.typicode.com/comments";
        fetch(apiAddress).then((response) => response.json()).then((data) => {
            console.log(data);
            this.setState({
                comments: data
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
                            <h3>Comments</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>PostID</th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email </th>
                                        <th>Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.comments.map((item) => {
                                        return (<tr>
                                            <td>{item.postId}</td>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.body}</td>
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