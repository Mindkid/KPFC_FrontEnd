 const BACKEND_ENDPOINT = "http://localhost:8080"
 
 async function retireveUsers({ email }) {
    var url = BACKEND_ENDPOINT + "/users?" + new URLSearchParams({ email })
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
}

async function loginUser(credentials) {
    return fetch(BACKEND_ENDPOINT + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

}

async function createPost(postInformation) {
    return fetch(BACKEND_ENDPOINT + '/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postInformation)
    })

}

export {retireveUsers, loginUser, createPost}