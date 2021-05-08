import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

const Card = props => {
    const product = props.product;
    const history = useHistory();

    const handleClick = event => {
        history.push(`/product/${event.currentTarget.id}`);
    };

    return (
        <div className="col p-2">
            <div id={ product.id } onClick={ handleClick } className="card bg-light border rounded shadow">
                <img alt="" className="card-img-top"/>
                <div className="card-body p-1">
                    <h4 className="card-title m-1">{ product.name }</h4>
                    <p className="card-text text-secondary m-1">by { product.company.tradeName }</p>
                    <p className="card-text m-1">{ product.value }</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
