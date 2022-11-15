import React from 'react';

const InfoCard = ({ date, name, ailment, searchValue }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Intake Date: {date}</p>
            <p>Ailment: {ailment}</p>
            <p>Matches search: {name.toLowerCase().includes(searchValue) ? 'Yes' : null}</p>
        </div>
    );
};

InfoCard.prototype = {};

export default InfoCard;