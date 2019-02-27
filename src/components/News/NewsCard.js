import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const NewsCard = ({ imagesrc, title, description, date }) => {
    return (
        <Card>
            <Image src={imagesrc} />
            <Card.Content>
                <Card.Header textAlign="left">{title}</Card.Header>
                <Card.Description textAlign="left">{description}</Card.Description>
            </Card.Content>
        </Card>
    );
};

export default NewsCard;
