import React, { useEffect, useState } from 'react';
import CompanyDataService from '../../../services/Company/index';

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

    return (
        <div>
            {
                companies.map(company => {
                    return (
                        <div key={company.id}>
                            <p>{company.tradeName}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List;
