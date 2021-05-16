import React from 'react';
import './index.css';

const Card = props => {

    return (
        <div className="col p-2">
            <div onClick={ props.click } className="card bg-light border rounded shadow">
                <img className="card-img-top" src={ props.img } alt={ props.alt } />
                <div className="card-body p-1">
                    <h4 className="card-title m-1">{ props.title }</h4>
                    <p className="card-text text-secondary m-1">{ props.subtitle }</p>
                    <p className="card-text m-1">{ props.text }</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
