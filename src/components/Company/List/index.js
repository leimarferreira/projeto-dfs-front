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
        return <CompanyCard company={company}/>
    });

    return (
        <div className="row">
            { companyCards }
        </div>
    );
};

export default List;
