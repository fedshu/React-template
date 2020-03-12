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
            <div className="SectionElem" style={this.state.selected ? {background: '#e5e6e8fa'} : {}} onClick={this.onClickHandler}>
                <div className="SectionPhoto">
                    <img src={this.props.user.photo_100} alt='user'/>
                </div>
                <div className="SectionName">
                    <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
                </div>
            </div>
        );
    }
}

export default Elem;
