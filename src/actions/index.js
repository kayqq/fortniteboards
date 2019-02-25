import axios from 'axios';

export const getUsernames = async username => {
    const response = await axios.get(
        `https://fortnite-public-api.theapinetwork.com/prod09/users/search`,
        { params: { username: username } }
    );
    return response.data.entries;
};

export const getProfileByUsername = async (username, platform = 'pc', window = 'season7') => {
    let response = await axios.get(
        'https://fortnite-public-api.theapinetwork.com/prod09/users/id',
        { params: { username: username } }
    );

    const { uid } = response.data;

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
    return response.data;
};

export const getProfileByUid = async (uid, platform = 'pc', window = 'season7') => {
    const response = await axios.get(
        `https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats`,
        {
            params: {
                user_id: uid,
                platform: platform,
                window: window
            }
        }
    );
    return response.data;
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
