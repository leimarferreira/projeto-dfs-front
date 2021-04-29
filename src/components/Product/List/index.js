import React, { useEffect, useState } from 'react';
import ProductDataService from '../../../services/Product/index';
import ProductCard from '../Card/index';

const List = props => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        retrieveProducts();
    }, []);

    const retrieveProducts = () => {
        let productsPromise = null;

        if (props.companyId) {
            productsPromise = ProductDataService.getByCompanyId(props.companyId);
        } else {
            productsPromise = ProductDataService.getAll();
        }

        productsPromise.then(response => {
            setProducts(response.data);
        }).catch(error => {
            // TODO: do something here
        });
    };

    const productCards = products.map(product => {
        return (
            <ProductCard key={ product.id } product={ product }/>
        );
    });

    return (
        <div className="row">
            {productCards}
        </div>
    );
};

export default List;
