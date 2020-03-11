import React from 'react';
import '../css/Arrow.css'

class Arrow extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChangeDirection();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleChange} >&gt;</button>
            </div>
        );
    }
}

export default Arrow;