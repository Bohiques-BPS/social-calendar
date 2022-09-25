import { FB } from '../assets/FBsdk';

const init = ({ appId, version}) => {
    window.FB.init({
        appId            : appId,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : version
    });
}

const login = async () => {
    init({appId:'692339434439644', version:'v14.0'})
    return new Promise((resolve, reject)=>{
        try{
            window.FB.login(function(response) {
                if (response.authResponse) {
                    window.FB.api('/me', responseApi => {
                    resolve({
                        error: false,
                        message: 'Good to see you, ' + responseApi.name + '.',
                        data: responseApi
                    })
                 });
                }
            })
        }
        catch( error ) {
            reject({
                error: true,
                message: 'User is login.',
                data: error
            })
        }
    })
}


const getLoginStatus = async () => {
    init({appId:'692339434439644', version:'v14.0'})
    return new Promise( (resolve, reject) => {
        window.FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;
                var signedRequest = response.authResponse.signedRequest;
                
                resolve({
                    status: 'connected',
                    uid: uid, 
                    accessToken: accessToken,
                    signedRequest: signedRequest
                })
            } else if (response.status === 'not_authorized') {
                reject({
                    status: 'not_authorized'
                })
            } else {
                resolve({
                    status: 'not_connected',
                    uid: null, 
                    accessToken: null
                })
            }
        });
    })
}

const getMe = fields => {
    init({appId:'692339434439644', version:'v14.0'})
    return new Promise( (resolve,reject) => {
        try{
            window.FB.api('/me','GET',fields,
                function(response) {
                    if( response.error ) {
                        reject( response.error )
                    }else{
                        resolve( response );
                    }
                }
            );
        }catch( error ) {
            reject( error )
        }
    })
    
}

export {
    init,
    login,
    getLoginStatus, 
    getMe
}