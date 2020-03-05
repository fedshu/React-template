import React from 'react';
import '../css/Board.css'
import SectionElem from './Elem';

class SectionBoard extends React.Component {

    onClickAction () {
        console.log('clicked');
    }

    render() {
        return (
            <div>
                <div className="left-board">
                    {this.props.users.map(u => <SectionElem user={u} onClickAction={this.onClickAction} />)}
                </div>
            </div>
        );
    }
}

export default SectionBoard;