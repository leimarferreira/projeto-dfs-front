import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CompanyDataService from '../../../services/Company/index';
import Card from '../../common/Card/index';
import Error from '../../common/Error/index';

const List = () => {
    
    const [companies, setCompanies] = useState([]);
    const [error, setError] = useState(null);
    const history = useHistory();

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
        return (
            <Card
                key={ company.id }
                img={ company.imageDataURL }
                alt={ "Company" }
                title={ company.tradeName }
                click={ () => history.push(`/company/${company.id}`) }
            />
        );   
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
