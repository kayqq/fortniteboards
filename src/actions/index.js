import axios from 'axios';

import {
    FETCH_BY_PLAYERNAME_REQUESTED,
    FETCH_BY_PLAYERNAME_SUCCESS,
    FETCH_BY_PLAYERNAME_FAILURE
} from './constants';

export const fetchByUsername = (username, callback) => {
    return async dispatch => {
        dispatch({ type: FETCH_BY_PLAYERNAME_REQUESTED });
        try {
            const response = await axios.get(
                `https://fortnite-public-api.theapinetwork.com/prod09/users/search`,
                { params: { username: username } }
            );
            dispatch({
                type: FETCH_BY_PLAYERNAME_SUCCESS,
                payload: response.data.entries
            });
        } catch (error) {
            dispatch({
                type: FETCH_BY_PLAYERNAME_FAILURE,
                payload: error
            });
        }
        callback();
    };
};

export const getUsers = async (username, callback) => {
    const response = await axios.get(
        `https://fortnite-public-api.theapinetwork.com/prod09/users/search`,
        { params: { username: username } }
    );
    callback();
    return response.data.entries;
};

export const getProfile = async (username, platform = 'pc', window = 'season7') => {
    let response = await axios.get(
        `https://fortnite-public-api.theapinetwork.com/prod09/users/search`,
        { params: { username: username } }
    );
    let profile = response.data.entries.filter(profile => profile.username === username);

    if (!profile.length) return new Error();

    const { uid } = profile[0];
    response = await axios.get(
        `https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats`,
        {
            params: {
                user_id: uid,
                platform: platform,
                window: window
            }
        }
    );
    profile = response.data;

    return profile;
};

export const getNews = async (language = 'en') => {
    let response = await axios.get(
        'https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get',
        {
            params: { language: language }
        }
    );

    return response.data;
};
