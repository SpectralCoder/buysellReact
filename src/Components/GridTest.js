import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import App from "../App";
import FacebookLogin from 'react-facebook-login';
import {NodeFetchHelper} from "../Others/NodeFetchHelper";

const api_endpoint = "http://localhost:2000/users/login/";

const responseFacebook = (response) => {
    const name = response.name;
    const email = response.email;
    const picture = response.picture.data.url;
    NodeFetchHelper.post(api_endpoint, null, null, {
        name,
        email,
        picture,


    }, function (statusCode, jsonData) {
        if (statusCode >= 400) {
            // ERRR
        } else {
            // OK

        }
    })
}

const responseGoogle = (response) => {
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    const picture = response.profileObj.imageUrl;
    NodeFetchHelper.post(api_endpoint, null, null, {
        name,
        email,
        picture,
    }, function (statusCode, jsonData) {
        if (statusCode >= 400) {
            // ERRR
        } else {
            // OK
        }
    })
}

export class GridTest extends Component {
    render() {
        return (
            <div>
                <GoogleLogin onC
                             clientId="784820003359-1v2ifv8j3uu6g6co0j0bj2l78fa8vfeu.apps.googleusercontent.com"
                             buttonText="Login"
                             onSuccess={responseGoogle}
                             onFailure={responseGoogle}
                             cookiePolicy={'single_host_origin'}
                />
                <FacebookLogin
                    appId="3651148031641282"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}/>

            </div>

        );
    }
}

export default GridTest;
