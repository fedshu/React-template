import React from 'react';
import '../css/Elem.css';

class SectionElem extends React.Component {
    render() {
        
        return (
            <div className="SectionElem" onClick={this.props.onClickAction}>
                <div className="SectionPhoto">
                    <img src={this.props.user.photo} alt='user'/>
                </div>
                <div className="SectionName">
                    <h3>{this.props.user.name}</h3>
                </div>
            </div>
        );
    }
}

export default SectionElem;
