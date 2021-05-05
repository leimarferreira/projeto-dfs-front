import React, { useEffect, useState } from 'react';
import CompanyDataService from '../../../services/Company/index';
import CompanyCard from '../Card/index';

const List = () => {
    
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        retrieveCompanies();
    });

    const retrieveCompanies = () => {
        CompanyDataService.getAll()
            .then(response => {
                setCompanies(response.data);
            })
            .catch(error => {
                // TODO: do something here.
            });
    };

    const companyCards = companies.map(company => {
        return <CompanyCard key={ company.id } company={ company }/>
    });

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            { companyCards }
        </div>
    );
};

export default List;
