import React from 'react';
import '../css/Wrapper.css';
import Search from './Search.js';
import List from './Lists.js';

class Wrapper extends React.Component {
    render() {
        return (
            <div className="section-1">
                <Search />
                <List />
            </div>
        );
    }
}

export default Wrapper;