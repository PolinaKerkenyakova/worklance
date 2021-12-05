import * as api from './api.js'

const host = 'http://localhost:5000'
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// //Implement application specific requests
// export async function getAllListings() {
//     return await api.get(host + '/data/cars?sortBy=_createdOn%20desc');
// }

// export async function getListingById(id) {
//     return await api.get(host + '/data/cars/' + id);
// }

// export async function createNewListing(item) {
//     return await api.post(host + '/data/cars', item);
// }

// export async function editListing(id, item) {
//     return api.put(host + '/data/cars/' + id, item)
// }

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
