import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

const Card = props => {
    const company = props.company;
    const history = useHistory();

    const handleClick = event => {
        history.push(`/company/${event.currentTarget.id}`);
    };

    return (
        <div className="col p-1">
            <div id={company.id} onClick={handleClick} className="card bg-light">
                <img alt="" className="card-img-top img-thumbnail"/>
                <div className="card-body p-1">
                    <h4 className="card-title m-0">{ company.tradeName }</h4>
                </div>
            </div>
        </div>
    );
};

export default Card;
