import React, { useState, useEffect } from 'react';
import { Search, Grid, Icon } from 'semantic-ui-react';
import { getUsernames } from '../actions';

import { useDebounce } from '../hooks/useDebounce';

const resultRenderer = ({ uid, username, platform }) => {
    let iconName = 'keyboard outline';
    switch (platform) {
        case 'ps4':
            iconName = 'game';
            break;
        case 'nintendo':
            iconName = 'game';
            break;
        default:
            break;
    }

    return (
        <Grid>
            <Grid.Column width="13">
                <span key={uid} title={username}>
                    <h4>{username}</h4>
                </span>
            </Grid.Column>
            <Grid.Column textAlign="center" width="3" floated="right">
                <h4>{platform == 'pc' ? 'PC' : <Icon name={iconName} />}</h4>
            </Grid.Column>
        </Grid>
    );
};

const SearchBar = ({ handleResultSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 200);

    async function fetch() {
        const response = await getUsernames(debouncedSearchTerm);
        const formattedResults = response.map((result, index) => {
            result.key = index;
            result.title = result.username;
            return result;
        });
        setResults(formattedResults);
        setIsSearching(false);
    }

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true);
            fetch();
        } else {
            resetComponent();
        }
    }, [debouncedSearchTerm]);

    const resetComponent = () => {
        setSearchTerm('');
        setIsSearching(false);
        setResults([]);
    };

    const onResultSelect = (e, { result }) => {
        setSearchTerm(result.username);
        handleResultSelect(result);
        resetComponent();
    };

    const onSearchChange = (e, { value }) => {
        if (!value.length) return resetComponent();
        setIsSearching(true);
        setSearchTerm(value);
    };

    return (
        <Search
            input={{ fluid: true, icon: 'arrow circle right' }}
            loading={isSearching}
            placeholder={'Enter an Epic username'}
            onResultSelect={onResultSelect}
            onSearchChange={onSearchChange}
            results={results}
            resultRenderer={resultRenderer}
            value={searchTerm}
            showNoResults={isSearching ? false : true}
        />
    );
};

export default SearchBar;
