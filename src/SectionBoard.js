import React from 'react';
import './SectionBoard.css'
import SectionElem from './SectionElem';

class SectionBoard extends React.Component {
    render() {
        const isMove = this.props.isMove;
        const users = this.props.users;
        // console.log(isMove);
        console.log(users);

        return (
            <div>
                <div className="left-board">
                    <SectionElem users={users} />
                </div>
                <div className="right-board">
                </div>
            </div>
        );
    }
}

export default SectionBoard;