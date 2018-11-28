import React from 'react';
import ReactDOM from 'react-dom';
import {
    Browser as Router,
    Route
} from 'react-router-dom';
import pageOne from './page1';
import pageTwo from './page2';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={pageOne}></Route>
                    <Route path="/page2" component={pageTwo}></Route>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(< App />, document.getElementById('root'));