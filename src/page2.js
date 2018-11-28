import React from 'react';
import {
    Link
} from 'react-router-dom';
import pageOne from './page1';


class Page2 extends React.Component {
    render() {
        return (
            <Link to="">Go to Page 1</Link>
            <div className="container" >
                <h1> This is Page One </h1>
            </div >
        )
    }
}

export default pageTwo;