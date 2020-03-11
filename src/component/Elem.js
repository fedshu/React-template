import React from 'react';
import '../css/Elem.css';

class Elem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    onClickHandler = () => {
        this.setState({selected: !this.state.selected}, () => {this.props.onClickAction(this.props.user.id, this.state.selected)});
    }

    render() {
        
        return (
            <div className="SectionElem" style={this.state.selected ? {background: 'yellow'} : {}} onClick={this.onClickHandler}>
                <div className="SectionPhoto">
                    <img src={this.props.user.photo} alt='user'/>
                </div>
                <div className="SectionName">
                    <h3>{this.props.user.name}</h3>
                </div>
            </div>
        );
    }
}

export default Elem;
