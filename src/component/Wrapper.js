import React from 'react';
import '../css/Wrapper.css';
import SectionSearch from './Search.js';
import SectionList from './Lists.js';

class SectionWrapper extends React.Component {
    render() {
        return (
            <div className="section-1">
                <SectionSearch />
                <SectionList />
            </div>
        );
    }
}

export default SectionWrapper;