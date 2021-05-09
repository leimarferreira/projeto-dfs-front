import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import ProductDataService from '../../services/Product/index';

const Product = () => {
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({});

    useEffect(() => {
        retrieveProduct(id)
            .then(setProduct);
    }, [id]);

    const retrieveProduct = async id => {
        let response = await ProductDataService.get(id);
        return response.data;
    };

    const redirectToPayment = () => {
        let userId = localStorage.getItem("currentUserId");
        history.push(`/payment?user=${userId}&product=${id}`);
    }

    return (
        <div>
            <div className="g-3 p-3">
                <h1>{ product.name }</h1>
                <h5>
                    <Link to={`/company/${product.company?.id}`} className="text-secondary">
                        { product.company?.tradeName }
                    </Link>
                </h5>
                <h3>{ product.value }</h3>
                <button onClick={redirectToPayment} className="btn btn-dark">
                    Buy
                </button>
                <p>{ product.description }</p>
                <div className="bg-light p-3">
                    <p>{ product.note }</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
