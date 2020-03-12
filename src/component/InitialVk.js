import React from 'react';
import List from './Lists.js';

/* global VK */
class Initial extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
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

    return new Promise(() => {
        VK.api(method, params, (data) => {
            if (data.error) {
                this.setState({
                    isLoaded: false,
                    error: data.error
                });
            } else {
                this.setState({
                    isLoaded: true,
                    items: data.response.items
                });
            }
        });
    });
}

componentDidMount(){
    this.auth();
    this.callAPI('friends.get', { fields: 'photo_100' });
}

handleArray() {
    let array = this.state.items.slice(0);

    for (let e = 0; e < array.length; e++) {
        array[e].isRight = false
    }

    return array;
}

    render() {
        const users = this.handleArray();
        return (
            <div>
                <List users={users} isLoaded={this.state.isLoaded}  />
            </div>
        )
    }

}
export default Initial;