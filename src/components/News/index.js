import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { Card } from 'semantic-ui-react';
import { getNews } from '../../actions';

const index = ({ itemsPerRow, maxItems }) => {
    const [news, setNews] = useState([]);
    async function fetch() {
        const response = await await getNews();
        setNews(response.entries.slice(0, maxItems));
    }

    useEffect(() => {
        fetch();
    }, []);

    return (
        <Card.Group stackable itemsPerRow={itemsPerRow}>
            {news.map(article => (
                <NewsCard
                    key={article.title}
                    imagesrc={article.image}
                    title={article.title}
                    description={article.body}
                    date={article.time}
                />
            ))}
        </Card.Group>
    );
};

export default index;
