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
        <div className="col p-2">
            <div id={company.id} onClick={handleClick} className="card bg-light border rounded shadow">
                <img alt="" className="card-img-top img-thumbnail"/>
                <div className="card-body p-1">
                    <h4 className="card-title m-1">{ company.tradeName }</h4>
                </div>
            </div>
        </div>
    );
};

export default Card;
