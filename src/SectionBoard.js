import React from 'react';
import './SectionBoard.css'
import SectionElem from './SectionElem';

class SectionBoard extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <div className="left-board">
                    <SectionElem />
                </div>
                <div className="right-board">
                    <SectionElem />
                </div>
            </div>
        );
    }
}

export default SectionBoard;