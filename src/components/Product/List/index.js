import React, { useEffect, useState } from 'react';
import ProductDataService from '../../../services/Product/index';

const List = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        retrieveProducts();
    });

    const retrieveProducts = () => {
        ProductDataService.getAll()
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                // TODO: do something here
            });
    }

    return (
        <div>
            {
                products.map(product => {
                    return (
                        <div key={product.id}>
                            <p>{ product.name }</p>
                            <p>{ product.value }</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default List;
