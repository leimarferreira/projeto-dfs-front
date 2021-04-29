import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../Product/List/index';

const Company = () => {
    const { id } = useParams();

    return (
        <div>
            <ProductList companyId={ id } />
        </div>
    );
};

export default Company;
