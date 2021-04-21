import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDataService from '../../services/Product/index';

const Product = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        retrieveProduct(id);
    });

    const retrieveProduct = id => {
        ProductDataService.get(id)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                // TODO: ...
            })
    }

    return (
        <div>
            <div>
                <p>{ product.name }</p>
                <p>{ product.description }</p>
                <p>{ product.value }</p>
                <p>{ product.note }</p>
            </div>

            <button>
                Comprar
            </button>
        </div>
    );
};

export default Product;
