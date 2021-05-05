import React, { useEffect, useState } from 'react';
import ProductDataService from '../../../services/Product/index';
import ProductCard from '../Card/index';

const List = props => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        retrieveProducts()
            .then(setProducts);
        // eslint-disable-next-line
    }, []);

    const retrieveProducts = async () => {
        let response = null;

        if (props.companyId) {
            response = await ProductDataService.getByCompanyId(props.companyId);
        } else {
            response = await ProductDataService.getAll();
        }

        return response.data;
    };

    const productCards = products.map(product => {
        return (
            <ProductCard key={ product.id } product={ product }/>
        );
    });

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {productCards}
        </div>
    );
};

export default List;
