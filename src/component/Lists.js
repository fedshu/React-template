import React from 'react';
import Board from './Board.js';
import Arrow from './Arrow.js';
import Elem from './Elem';
import '../css/Board.css';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selection: null,
            users: [],
            isLoad: false
        }
    }

    hadleClickElem = (id, sel) => {
        this.setState({ 
            selection: sel ? id : null,
            users: this.props.users
        });
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
                    <Board>
                        {this.props.users.map(u => !u.isRight ? <Elem key={u.id} user={u} onClickAction={this.hadleClickElem} /> : null)}
                    </Board>
                </div>
                <div className="right-board">
                    <Board>
                        {this.props.users.map(u => u.isRight ? <Elem key={u.id} user={u} onClickAction={this.hadleClickElem} /> : null)}
                    </Board>
                </div>

                <div className="arrow">
                    <div className="toRight">
                        <Arrow onChangeDirection={() => {this.handleDirection(true)}} />
                    </div>
                    <div className="toLeft">
                        <Arrow onChangeDirection={() => {this.handleDirection(false)}} />
                    </div>
                </div>
            </div>
        );
    }
}

export default List;