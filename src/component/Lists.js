import React from 'react';
import '../css/Board.css';
import SectionBoard from './Board.js';
import SectionArrow from './Arrow.js';
import SectionElem from './Elem';

let userList = [
    {id: 1, photo: 'https://www.google.com/search?q=avatar+icon&tbm=isch&source=iu&ictx=1&fir=yDb-3EkFx2S5iM%253A%252C5naQRIzjfKOHcM%252C_&vet=1&usg=AI4_-kTZd7Xggu5T4zWzdn_kvrpZQhQ_DQ&sa=X&ved=2ahUKEwj1u8iHkPznAhWgSxUIHbxuAIUQ9QEwDnoECAoQNg#imgrc=yDb-3EkFx2S5iM:',
    name: 'Sam Fisher', isRight: false},
    {id: 2, photo: 'https://www.google.com/search?q=avatar+icon&tbm=isch&source=iu&ictx=1&fir=yDb-3EkFx2S5iM%253A%252C5naQRIzjfKOHcM%252C_&vet=1&usg=AI4_-kTZd7Xggu5T4zWzdn_kvrpZQhQ_DQ&sa=X&ved=2ahUKEwj1u8iHkPznAhWgSxUIHbxuAIUQ9QEwDnoECAoQNg#imgrc=yDb-3EkFx2S5iM:',
    name: 'John Gatsby', isRight: false},
];

class SectionList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selection: null,
            users: userList
        }
    }

    hadleClickLeftElem = (id) => {
        this.setState({selection: id });
    }

    // hadleClickRightElem() {

    // }

    handleToRightDirection = () => {

        if (!this.state.selection) {
            return;
        }
        this.setState({users: this.state.users.map(u => {
           if (u.id === this.state.selection) {
               u.isRight = !u.isRight;
           }
           return u;
        })});
    }

    handleToLeftDirection = () => {
        if (!this.state.selection) {
            return;
        }

        this.setState({users: this.state.users.map(u => {
            if ( u.id === this.state.selection) {
                u.isRight = !u.isRight;
            }
            return u;
        })});
    }


    render() {

        return (
            <div>
                <div className="left-board">
                    <SectionBoard>
                        {this.state.users.map(u => !u.isRight ? <SectionElem key={u.id} user={u} onClickAction={this.hadleClickLeftElem} /> : null)}
                    </SectionBoard>
                </div>
                <div className="right-board">
                    <SectionBoard users={this.state.rightUsers} onClickAction={this.hadleClickRightElem}>
                        {this.state.users.map(u => u.isRight ? <SectionElem key={u.id} user={u} onClickAction={this.hadleClickLeftElem} /> : null)}
                    </SectionBoard>
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