import * as api from './api.js'

const host = 'http://localhost:5000'
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getUserById(id) {
    return await api.get(`${host}/users/${id}`);
}

export async function getAllOffers() {
    return await api.get(host + '/offers');
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

// export async function delListing(id) {
//     return await api.del(host + '/data/cars/' + id);
// }

// export async function getMyListings(userId) {
//     return api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
// }

// export async function getRecipeCount() {
//     return api.get(host + '/data/recipes?count');
// }

// export async function getRecent() {
//     return api.get(host + '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3');
// }
