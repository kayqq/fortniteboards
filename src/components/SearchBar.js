import React, { useState, useEffect } from 'react';
import { Search, Label } from 'semantic-ui-react';
import { getUsernames } from '../actions';

import { useDebounce } from '../hooks/useDebounce';

const resultRenderer = ({ uid, username }) => <Label key={uid} content={username} />;

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
            placeholder={'Enter your Epic username'}
            onResultSelect={onResultSelect}
            onSearchChange={onSearchChange}
            results={results}
            resultRenderer={resultRenderer}
            value={searchTerm}
            showNoResults={true}
        />
    );
};

export default SearchBar;
