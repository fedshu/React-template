import React from 'react';
import './Section-1.css';
import Section11 from './Section-1-1.js';
import SectionList from './SectionLists.js';


class Section1 extends React.Component {
    render() {
        return (
            <div className="section-1">
                <div>
                    <Section11 />
                </div>
                <div>
                    <SectionList />
                </div>
            </div>
        );
    }
}

export default Section1;