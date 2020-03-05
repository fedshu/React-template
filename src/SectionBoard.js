import React from 'react';
import './SectionBoard.css'
import SectionElem from './SectionElem';

class SectionBoard extends React.Component {

    onClickAction () {
        console.log('clicked');
    }

    render() {
        return (
            <div className="left-board">
                {this.props.users.map(u => <SectionElem user={u} onClickAction={this.onClickAction} />)}
            </div>
        );
    }
}

export default SectionBoard;