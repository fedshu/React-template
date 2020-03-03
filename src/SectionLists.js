import React from 'react';
import './SectionBoard.css';
import SectionBoard from './SectionBoard.js';
import SectionArrow from './SectionArrow.js'
import SectionElem from './SectionElem';

let userList = [
    {photo: 'https://www.google.com/search?q=avatar+icon&tbm=isch&source=iu&ictx=1&fir=yDb-3EkFx2S5iM%253A%252C5naQRIzjfKOHcM%252C_&vet=1&usg=AI4_-kTZd7Xggu5T4zWzdn_kvrpZQhQ_DQ&sa=X&ved=2ahUKEwj1u8iHkPznAhWgSxUIHbxuAIUQ9QEwDnoECAoQNg#imgrc=yDb-3EkFx2S5iM:',
    name: 'Sam Fisher'},
    {photo: 'https://www.google.com/search?q=avatar+icon&tbm=isch&source=iu&ictx=1&fir=yDb-3EkFx2S5iM%253A%252C5naQRIzjfKOHcM%252C_&vet=1&usg=AI4_-kTZd7Xggu5T4zWzdn_kvrpZQhQ_DQ&sa=X&ved=2ahUKEwj1u8iHkPznAhWgSxUIHbxuAIUQ9QEwDnoECAoQNg#imgrc=yDb-3EkFx2S5iM:',
    name: 'John Gatsby'},
];

class SectionList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leftUsers: userList,
            rightUsers: []
        }

    }

    render() {

        return (
            <div>
                <div>
                    <SectionBoard users={this.state.leftUsers}/>
                </div>
                <div>
                    <SectionBoard users={this.state.rightUsers}/>
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