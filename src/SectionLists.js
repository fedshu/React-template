import React from 'react';
import './SectionLists.css';
import Section12 from './Section-1-2.js';
import Section13 from './Section-1-3.js';
import Section14 from './Section-1-4.js';

class SectionList extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <Section12 />
                <Section13 />
                <Section14 />
            </div>
        );
    }
}

export default SectionList;