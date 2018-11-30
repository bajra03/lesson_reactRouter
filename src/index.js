import React from 'react';
import ReactDOM from 'react-dom';
import Example from './example';

class App extends React.Component {
    render() {
        return (
            <Example />
        );
    }
}

ReactDOM.render(< App />, document.getElementById('root'));