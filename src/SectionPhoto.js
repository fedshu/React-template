import React from 'react';
import './SectionPhoto.css';
import user from './user.svg';

class SectionPhoto extends React.Component {
    render() {
        return (
            <div className="SectionPhoto">
                <img src={user} alt='user'/>
            </div>
        )
    }
}

export default SectionPhoto;