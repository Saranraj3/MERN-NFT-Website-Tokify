const ServerDomain = 'http://localhost:8080'

const API = {
    Signup: {
        url: `${ServerDomain}/auth/signup`,
        method: 'post'
    },
    Login: {
        url: `${ServerDomain}/auth/login`,
        method: 'post'
    }

}

export default API;