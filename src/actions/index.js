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
                `https://fortnite-public-api.theapinetwork.com/prod09/users/search?username=${username}`
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

export const getProfile = async (username, platform = 'pc', window = 'season7') => {
    let response = await axios.get(
        `https://fortnite-public-api.theapinetwork.com/prod09/users/search?username=${username}`
    );
    let profile = response.data.entries.filter(profile => profile.username === username);

    if (!profile.length) return new Error();

    const { uid } = profile[0];
    response = await axios.get(
        `https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=${uid}&platform=${platform}&window=${window}`
    );
    profile = response.data;

    return profile;
};
