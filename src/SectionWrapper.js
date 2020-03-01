import React from 'react';
import './SectionWrapper.css';
import SectionSearch from './SectionSearch.js';
import SectionList from './SectionLists.js';

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