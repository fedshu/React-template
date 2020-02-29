import React from 'react';
import './SectionElem.css';
import SectionPhoto from './SectionPhoto.js';
import SectionName from './SectionName.js';

class SectionElem extends React.Component {
    render() {
        return (
            <div className="SectionElem">
                <SectionPhoto />
                <SectionName />
            </div>
        );
    }
}

export default SectionElem;
