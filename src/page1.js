import React from 'react';
import {
    Link
} from 'react-router-dom';
import pageTwo from './page2';


class Page1 extends React.Component {
    render() {
        return (
            <Link to="">Go to Page 2</Link>
            <div className="container" >
                <h1> This is Page One </h1>
            </div >
        )
    }
}

export default pageOne;