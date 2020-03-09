import React from 'react';
import '../css/Board.css'
import SectionElem from './Elem';

class SectionBoard extends React.Component {
    constructor(props) {
        super(props);
        this.onClickAction = this.onClickAction.bind(this)
    }

    onClickAction (e) {
        this.props.onClickAction(e);
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => <SectionElem id={u.id} key={u.id} user={u} onClickAction={this.onClickAction} />)}
            </div>
        );
    }
}

export default SectionBoard;