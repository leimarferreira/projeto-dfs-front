import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = props => {
    const company = props.company;
    const history = useHistory();

    const handleClick = event => {
        history.push(`/company/${event.currentTarget.id}`);
    };

    return (
        <div id={company.id} onClick={handleClick} className="card col-sm-4">
            <div className="card-body">
            </div>
            <div className="card-footer">
                <p>{ company.tradeName }</p>
            </div>
        </div>
    );
};

export default Card;
