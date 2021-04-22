import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = props => {
    const product = props.product;
    const history = useHistory();

    const handleClick = event => {
        history.push(`/product/${event.target.id}`);
    };

    return (
        <div className="card col-sm-4" id={ product.id } onClick={ handleClick }>
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
