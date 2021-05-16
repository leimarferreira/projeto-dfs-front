import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductDataService from '../../../services/Product/index';
import Card from '../../common/Card/index';
import Error from '../../common/Error/index';

const List = props => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const history = useHistory();
    
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
            <Card
                key={ product.id }
                img={ product.imageDataURL }
                alt={ "Product" }
                title={ product.name }
                subtitle={ product.company.tradeName }
                text={ product.value }
                click={ () => history.push(`/product/${product.id}`) }
            />
        );
    });

    return error ? (
        <Error message={"An error occurred while retrieving products."} />
    ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            { productCards }
        </div>
    );
};

export default List;
