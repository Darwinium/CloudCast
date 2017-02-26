import Api from '../../Api';

export function constructUserUrl(userId) {
    return `${Api.api_url}/users/${userId}?client_id=${Api.client_id}`;
}

export function constructUserProfilesUrl(userId) {
    return `${Api.api_url}/users/${userId}/web-profiles?client_id=${Api.client_id}`;
}

export function constructUserFavoritesUrl(userId) {
    return `${Api.api_url}/users/${userId}/favorites?client_id=${Api.client_id}`;
}

export function constructUserSongsUrl(userId) {
    return `${Api.api_url}/users/${userId}/tracks?client_id=${Api.client_id}`;
}

export function constructSongUrl(songId) {
    return `${Api.api_url}/tracks/${songId}?client_id=${Api.client_id}`;
}
