export const settings = {
    host: ''
};

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok === false) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }
        try {
            return await response.json();
        } catch (err) {
            return response;
        }
    } catch (error) {
        alert(error.message);
        throw new Error(error)
    }

}

function createOptions(method = 'get', data) {
    const result = {
        method,
        headers: {},

    }

    if (data) {
        result.headers['Content-type'] = 'application/json';
        result.body = JSON.stringify(data);
    }

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        result.headers['X-Authorization'] = token;
    }

    return result;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

export async function login(email, password) {
    const response = await post(settings.host + '/auth/login', { email, password });

    sessionStorage.setItem('authToken', response.authToken);
    sessionStorage.setItem('email', response.email);
    sessionStorage.setItem('_id', response._id);
    sessionStorage.setItem('name', response.name);

    return response;
}

export async function register(name, email, password, profileImage) {
    const response = await post(settings.host + '/auth/register', { name, email, password, profileImage });

    sessionStorage.setItem('authToken', response.authToken);
    sessionStorage.setItem('email', response.email);
    sessionStorage.setItem('_id', response._id);
    sessionStorage.setItem('name', response.name);


    return response;
}

export async function logout() {
    const response = await get(settings.host + '/auth/logout');

    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('_id');
    sessionStorage.removeItem('name');

    return response;
}