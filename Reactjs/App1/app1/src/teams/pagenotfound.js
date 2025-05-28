import React from "react";
export default class PageNotFound extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="container">
            <h2 className="mb-4">404 - Page not found</h2>
            The team you're searching for doesn't exists. Pls try again.!!
        </div>
        );
    }
}