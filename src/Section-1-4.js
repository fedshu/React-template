import React from 'react';
import './Section-1-4.css'
import Section141 from './Section-1-4-1.js'
import Section142 from './Section-1-4-2.js'

class Section14 extends React.Component {
    render() {
        return (
            <div className="arrows">
                <div>
                    <Section141 />
                </div>
                <div>
                    <Section142 />
                </div>
            </div>
        );
    }
}

export default Section14;