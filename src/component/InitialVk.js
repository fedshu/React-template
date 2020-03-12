import React from 'react';
import List from './Lists.js';

/* global VK */
class Initial extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            items: []
        }
    }


auth() {
    VK.init({
        apiId: 7356269
      });

    return new Promise( (resolve, reject) => {
        VK.Auth.login(data => {
            if (data.session) {
                resolve();
            } else {
                reject(new Error('Ошибка авторизации'));
            }
        } ,2)
    });
}

callAPI(method, params) {
    params.v = "5.76";

    return new Promise((resolve, reject) => {
        VK.api(method, params, (data) => {
            if (data.error) {
                reject(new Error(data.error));
            } else {
                resolve(this.handleArray(data.response.items));
            }
        });
    });
}

componentDidMount(){
    this.auth();
}

handleArray(array) {

    for (let e = 0; e < array.length; e++) {
        array[e].isRight = false
    }

    return array;
}

getFriends = () => {
    return this.callAPI('friends.get', { fields: 'photo_100' });
}

    render() {
        return (
            <div>
                <List getFriends={this.getFriends}  />
            </div>
        )
    }

}
export default Initial;