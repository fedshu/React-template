import React from 'react';
import './SectionArrow.css'

class SectionArrow extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChangeDirection(e.target.value);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleChange} >&gt;</button>
            </div>
        );
    }
}

export default SectionArrow;