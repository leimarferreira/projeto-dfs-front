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
        <div id={ product.id } onClick={ handleClick } className="card col-sm-4 m-1" role="navigation">
            <div className="card-body">
            </div>
            <div className="card-footer">
                <p>{ product.name }</p>
                <p>{ product.value }</p>
            </div>
        </div>
    );
};

export default Card;
