const PUT = 'PUT'
const GET = 'GET'
const POST = 'POST'
const LOGIN = 'LOGIN'
const DELETE = 'DELETE'
const SERVER = 'http://192.168.110.190:'
const PORT = '9090/iTrade/'

const HOST = 'mi-trade.masvn.com'
const USER_AGENT = 'Mozilla/5.0'
const ACCEPT_LANGUAGE = 'en-US,en;q=0.5'
const ACCEPT = 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
const CONTENT_TYPE = 'application/x-www-form-urlencoded; charset=UTF-8'
const CONNECTION = 'keep-alive'

var fetch = require('node-fetch');

const HEADERS = {
    'Host': HOST,
    'User-Agent': USER_AGENT,
    'Accept': ACCEPT,
    'Accept-language': ACCEPT_LANGUAGE,
    'Connection': CONNECTION,
    'Content-Type': CONTENT_TYPE
}
const HEADERSCK = {
    'Host': HOST,
    'Accept': ACCEPT,
    'Accept-language': ACCEPT_LANGUAGE,
    'Content-Type': CONTENT_TYPE
}

function getServerUrl() {
    return SERVER + PORT
}
module.exports = {
    FetchAPI: async function FetchAPI(id, JsonData, method) {
    console.log("hahaha")
    var url = SERVER + PORT + id + '';
    var formData = '';
    for (var k in JsonData) {
        formData += k + '=' + JsonData[k] + '&'
    }
    //console.log(url,formData)
    // method GET
    if (method === GET) {
        // url += GET;  
        if (formData != null) {
            url += '?' + formData
            return new Promise((resolve, reject) => {
                var response = fetch(url, {
                    method: GET,
                    headers: HEADERSCK,
                    credentials: 'include'
                })

                response.then(res => {
                    if (res.ok) {
                        res.json().then(resolve).catch(reject)
                    } else {
                        reject(res)
                    }
                })
                    .catch(reject)
            })
        } else {
            return new Promise((resolve, reject) => {
                var response = fetch(url, {
                    method: GET,
                    headers: HEADERSCK
                })

                response.then(res => {
                    if (res.ok) {
                        res.json().then(resolve).catch(reject)
                    } else {
                        reject(res)
                    }
                })
                    .catch(reject)
            })
        }
    }

    //method POST
    if (method === POST) {
        //url += POST
        return new Promise((resolve, reject) => {
            let response = fetch(url, {
                method: POST,
                headers: HEADERSCK,
                credentials: 'include',
                body: formData
            })
            response.then(res => {
                if (res.ok) {
                    res.json().then(resolve).catch(reject)
                } else {
                    reject(res)
                }
            })
                .catch(reject)
        })
    }

    //method LOGIN
    if (method === LOGIN) {
        //url += LOGIN
        return new Promise((resolve, reject) => {
            var response = fetch(url, {
                method: POST,
                headers: HEADERSCK,
                credentials: 'include',
                body: formData
            })
            response.then(res => {
                if (res.ok) {
                    res.json().then(resolve).catch(reject)
                } else {
                    reject(res)
                }
            })
                .catch(reject)
        })
    }

    //method DELETE
    //method POST
    if (method === DELETE) {
        //url += DELETE
        return new Promise((resolve, reject) => {
            var response = fetch(url, {
                method: POST,
                headers: HEADERSCK,
                credentials: 'include',
                body: formData
            })
            response.then(res => {
                if (res.ok) {
                    res.json().then(resolve).catch(reject)
                } else {
                    reject(res)
                }
            })
                .catch(reject)
        })
    }
    if (method === 'REPORT') {
        url+= '?'+formData
        window.location.href = url
    }


}
}