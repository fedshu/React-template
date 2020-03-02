import React from 'react';
import './SectionElem.css';

class SectionElem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const users = this.props.users;
        });
        

        return (
            <div className="SectionElem">
                <div className="SectionPhoto">
                    <img alt='user'/>
                </div>
                <div className="SectionName">
                    <h3>Name LastName</h3>
                </div>
            </div>
        );
    }
}

export default SectionElem;
