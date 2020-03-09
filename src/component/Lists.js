import React from 'react';
import '../css/Board.css';
import SectionBoard from './Board.js';
import SectionArrow from './Arrow.js'

let userList = [
    {id: 1, photo: 'https://www.google.com/search?q=avatar+icon&tbm=isch&source=iu&ictx=1&fir=yDb-3EkFx2S5iM%253A%252C5naQRIzjfKOHcM%252C_&vet=1&usg=AI4_-kTZd7Xggu5T4zWzdn_kvrpZQhQ_DQ&sa=X&ved=2ahUKEwj1u8iHkPznAhWgSxUIHbxuAIUQ9QEwDnoECAoQNg#imgrc=yDb-3EkFx2S5iM:',
    name: 'Sam Fisher'},
    {id: 2, photo: 'https://www.google.com/search?q=avatar+icon&tbm=isch&source=iu&ictx=1&fir=yDb-3EkFx2S5iM%253A%252C5naQRIzjfKOHcM%252C_&vet=1&usg=AI4_-kTZd7Xggu5T4zWzdn_kvrpZQhQ_DQ&sa=X&ved=2ahUKEwj1u8iHkPznAhWgSxUIHbxuAIUQ9QEwDnoECAoQNg#imgrc=yDb-3EkFx2S5iM:',
    name: 'John Gatsby'},
];

class SectionList extends React.Component {
    constructor(props) {
        super(props);
        this.handleToRightDirection = this.handleToRightDirection.bind(this);
        this.handleToLeftDirection = this.handleToLeftDirection.bind(this);
        this.hadleClickLeftElem = this.hadleClickLeftElem.bind(this);
        this.hadleClickRightElem = this.hadleClickRightElem.bind(this);

        this.state = {
            toLeftMove: true,
            toRightMove: true,
            leftUsers: userList,
            rightUsers: [],
            elem: {},
        }
    }

    render() {
        let toRightMove = this.state.toRightMove;
        let toLeftMove = this.state.toLeftMove;
        let leftUsers = this.state.leftUsers;
        let rightUsers = this.state.rightUsers;

        if (toRightMove) {
            rightUsers = leftUsers.slice(0);
        } else 
        if (toLeftMove) {
            leftUsers = rightUsers.slice(0);
        }

        return (
            <div>
                <div className="left-board">
                    <SectionBoard users={this.state.leftUsers}/>
                </div>
                <div className="right-board">
                    <SectionBoard users={this.state.rightUsers}/>
                </div>

                <div className="arrow">
                    <div className="toRight">
                        <SectionArrow onChangeDirection={this.handleToRightDirection} />
                    </div>
                    <div className="toLeft">
                        <SectionArrow onChangeDirection={this.handleToLeftDirection} />
                    </div>
                </div>            
            </div>
        );
    }
}

export default SectionList;