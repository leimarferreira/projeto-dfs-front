import React, { useEffect, useState } from 'react';
import ProductDataService from '../../../services/Product/index';
import ProductCard from '../Card/index';
import Error from '../../common/Error/index';

const List = props => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        retrieveProducts()
            .then(setProducts)
            .catch(setError);
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

    return error ? (
        <Error message={"An error occurred while retrieving products."} />
    ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {productCards}
        </div>
    );
};

export default List;
