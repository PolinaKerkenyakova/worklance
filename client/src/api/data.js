import * as api from './api.js'

const host = 'http://localhost:5000'
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getUserById(id) {
    return await api.get(`${host}/users/${id}`);
}

export async function getUserProfileData(id) {
    return await api.get(`${host}/users/${id}/profile`);
}

export async function getAllOffers(category) {
    category = category.split('+').join(' ')
    return await api.get(host + '/offers/search/' + category);
}

export async function getOfferById(id) {
    return await api.get(`${host}/offers/${id}`);
}

export async function createNewOffer(offer) {
    return await api.post(host + '/offers', offer);
}

export async function editOffer(id, offer) {
    return api.put(host + '/offers/' + id, offer)
}

export async function delOffer(id) {
    return await api.del(host + '/offers/' + id);
}


export async function addComment(id, comment) {
    return await api.post(`${host}/offers/${id}/comments`, comment);
}