import React from 'react';
import './SectionBoard.css';
import SectionBoard from './SectionBoard.js';
import SectionArrow from './SectionArrow.js'

let userList = [
    {photo: '',
    name: ''}
];

class SectionList extends React.Component {
    constructor(props) {
        super(props);
        this.handleRightChange = this.handleRightChange.bind(this);
        this.handleLeftChange = this.handleLeftChange.bind(this);
        this.state = {
            isMove: false
        };
    }

    handleRightChange() {
        this.setState({isMove: true});
    }

    handleLeftChange() {
        this.setState({isMove: false});
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div>
                    <SectionBoard />
                </div>
                <div className="arrow">
                    <div className="toRight">
                        <SectionArrow onChangeDirection={this.handleRightChange} />
                    </div>
                    <div className="toLeft">
                        <SectionArrow onChangeDirection={this.handleLeftChange} />
                    </div>
                </div>            
            </div>
        );
    }
}

export default SectionList;