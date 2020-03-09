import React from 'react';
import '../css/Board.css';
import SectionBoard from './Board.js';
import SectionArrow from './Arrow.js';
import SectionElem from './Elem';

let userList = [
    {
        id: 1, photo: 'http://icons.iconarchive.com/icons/diversity-avatars/avatars/64/batman-icon.png',
        name: 'Sam Fisher', isRight: false
    },
    {
        id: 2, photo: 'http://icons.iconarchive.com/icons/diversity-avatars/avatars/64/batman-icon.png',
        name: 'John Gatsby', isRight: false
    },
];

class SectionList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selection: null,
            users: userList
        }
    }

    hadleClickElem = (id) => {
        this.setState({ selection: id });
    }


    handleDirection = (isRightDirrection) => {
        
        if (!this.state.selection) {
            return;
        }

        this.setState({
            users: this.state.users.map(u => {
                if (u.id === this.state.selection && isRightDirrection !== u.isRight) {
                    u.isRight = !u.isRight;
                }
                return u;
            }),
            selection: null
        });
    }

    render() {

        return (
            <div>
                <div className="left-board">
                    <SectionBoard>
                        {this.state.users.map(u => !u.isRight ? <SectionElem key={u.id} user={u} onClickAction={this.hadleClickElem} /> : null)}
                    </SectionBoard>
                </div>
                <div className="right-board">
                    <SectionBoard>
                        {this.state.users.map(u => u.isRight ? <SectionElem key={u.id} user={u} onClickAction={this.hadleClickElem} /> : null)}
                    </SectionBoard>
                </div>

                <div className="arrow">
                    <div className="toRight">
                        <SectionArrow onChangeDirection={() => {this.handleDirection(true)}} />
                    </div>
                    <div className="toLeft">
                        <SectionArrow onChangeDirection={() => {this.handleDirection(false)}} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionList;