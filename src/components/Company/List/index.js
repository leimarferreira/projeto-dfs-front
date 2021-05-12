import React, { useEffect, useState } from 'react';
import CompanyDataService from '../../../services/Company/index';
import CompanyCard from '../Card/index';
import Error from '../../common/Error/index';

const List = () => {
    
    const [companies, setCompanies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        retrieveCompanies()
            .then(setCompanies)
            .catch(setError);
    }, []);

    const retrieveCompanies = async () => {
        let response = await CompanyDataService.getAll();
        return response.data;
    };

    const companyCards = companies.map(company => {
        return <CompanyCard key={ company.id } company={ company }/>
    });

    return error ? (
        <Error message={"An error occurred while retrieving companies."}/>
    ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            { companyCards }
        </div>
    );
};

export default List;
