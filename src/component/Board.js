import React from 'react';
import '../css/Board.css'


class SectionBoard extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default SectionBoard;