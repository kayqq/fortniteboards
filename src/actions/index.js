import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://fortnite-public-api.theapinetwork.com/prod09`,
    timeout: 3000
});

export const getUsernames = async username => {
    const endPoint = `/users/search?username=${username}`;
    const response = await axiosInstance.get(endPoint);
    return response.data.entries;
};

export const getProfileByUsername = async (username, platform = 'pc', window = 'season7') => {
    let endPoint = `/users/id?username=${username}&platform=${platform}&window=${window}`;
    let response = await axiosInstance.get(endPoint);
    const { uid } = response.data;

    endPoint = `/users/public/br_stats?user_id=${uid}&platform=${platform}&window=${window}`;
    response = await axiosInstance.get(endPoint);
    return response.data;
};

export const getProfileByUid = async (uid, platform = 'pc', window = 'season7') => {
    const endPoint = `/users/public/br_stats?user_id=${uid}&platform=${platform}&window=${window}`;
    const response = await axiosInstance.get(endPoint);
    return response.data;
};

export const getNews = async (language = 'en') => {
    const endPoint = `/br_motd/get?language=${language}`;
    const response = await axiosInstance.get(endPoint);
    return response.data;
};
