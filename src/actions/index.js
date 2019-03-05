import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://fortnite-public-api.theapinetwork.com/prod09`
});

export const getUsernames = async username => {
    const endPoint = `/users/search?username=${username}`;
    const response = await axiosInstance.get(endPoint);
    return response.data.entries;
};

export const getUidByUsername = async username => {
    let endPoint = `/users/id?username=${username}`;
    let response = await axiosInstance.get(endPoint);
    const { uid } = response.data;
    return uid;
};

export const getStatsByUid = async (uid, platform = 'pc', window = 'season8') => {
    const endPoint = `/users/public/br_stats?user_id=${uid}&platform=${platform}&window=${window}`;
    const response = await axiosInstance.get(endPoint);
    return response.data;
};

export const getMatchesByUid = async uid => {
    const endPoint = `/users/public/matches_v2?user_id=${uid}`;
    const response = await axiosInstance.get(endPoint);
    return response.data.matches;
};

export const getStatsByUsername = async (username, platform = 'pc', window = 'season8') => {
    const uid = await getUidByUsername(username);
    const response = await getStatsByUid(uid, platform, window);
    return response;
};

export const getProfileByUsername = async (username, platform = 'pc', window = 'season8') => {
    const uid = await getUidByUsername(username);

    // Start async requests
    const responseMatches = getMatchesByUid(uid);
    const responseStats = getStatsByUid(uid, platform, window);

    // Await till all promises are resolved
    const profile = { ...(await responseStats), matches: await responseMatches };

    return profile;
};

export const getNews = async (language = 'en') => {
    const endPoint = `/br_motd/get?language=${language}`;
    const response = await axiosInstance.get(endPoint);
    return response.data;
};
