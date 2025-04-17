import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

{/*
    6) display IPL point table using reusable class components 
*/}

const root = ReactDOM.createRoot(document.getElementById('root'));
class Schedule extends React.Component {
    
    constructor(props) {
        super();
        this.no = props.no;
        this.team = props.team;
        this.m = props.m;
        this.w = props.w;
        this.l = props.l;
        this.nrr = props.nrr;
        this.pts = props.pts;
        // console.log('constructor called...');
    }
    render() {
        // console.log('render called...');
        return (<tr>
            <td>{this.no}</td>
            <td>{this.team}</td>
            <td>{this.m}</td>
            <td>{this.w}</td>
            <td>{this.l}</td>
            <td>{this.nrr}</td>
            <td>{this.pts}</td>
            {/* <td><button className='btn btn-danger' onClick={this.updateMatch}>Cancel Match</button></td> */}
        </tr>);
    }
}
class IPL extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>IPL Points Table</h1>
                        <hr />
                        <table className='table table-striped'>
                            <thead>
                                <th>No</th>
                                <th>Team</th>
                                <th>M</th>
                                <th>W</th>
                                <th>L</th>
                                <th>NRR</th>
                                <th>Pts</th>
                            </thead>
                            <tbody>
                                <Schedule no='1' team='DC' m='6' w='5' l='1' nrr='+0.744' pts='10'/>
                                <Schedule no='2' team='GT' m='6' w='4' l='2' nrr='+1.081' pts='8' />
                                <Schedule no='3' team='RCB' m='6' w='4' l='2' nrr='+0.672' pts='8' />
                                <Schedule no='4' team='PBKS' m='6' w='4' l='2' nrr='+0.172' pts='8' />
                                <Schedule no='5' team='LSG' m='7' w='4' l='3' nrr='+0.086' pts='8' />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
root.render(<IPL />);