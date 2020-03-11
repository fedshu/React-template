import React from 'react';
import '../css/Wrapper.css';
import Search from './Search.js';
import InitVk from './InitialVk.js';

class Wrapper extends React.Component {
    
    render() {
        return (

            <div className="section-1">
                <Search />
                <InitVk/>
            </div>
        );
    }
}

export default Wrapper;