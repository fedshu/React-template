import React from 'react';
import '../css/Wrapper.css';
import SectionSearch from './Search.js';
import SectionList from './Lists.js';

class SectionWrapper extends React.Component {
    render() {
        return (
            <div className="section-1">
                <div>
                    <SectionSearch />
                </div>
                <div>
                    <SectionList />
                </div>
            </div>
        );
    }
}

export default SectionWrapper;