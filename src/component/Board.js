import React from 'react';
import '../css/Board.css'


class Board extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Board;