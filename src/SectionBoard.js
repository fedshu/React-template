import React from 'react';
import './SectionBoard.css'
import SectionElem from './SectionElem';

class SectionBoard extends React.Component {

    onClickAction () {
        console.log('clicked');
    }

    render() {
        const isMove = this.props.isMove;
        const users = this.props.users;
        // console.log(isMove);
        console.log(users);

        return (
            <div>
                <div className="left-board">
                    <SectionElem users={users} onClickAction={this.onClickAction} />
                </div>
                <div className="right-board">
                </div>
            </div>
        );
    }
}

export default SectionBoard;