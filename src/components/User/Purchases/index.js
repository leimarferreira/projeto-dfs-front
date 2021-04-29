import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseDataService from '../../../services/Purchase/index';

const Purchases = props => {
    const userId = props.userId;
    const [ purchases, setPurchases ] = useState([]);

    useEffect(() => {
        retrievePurchases();
    }, []);

    const retrievePurchases = () => {
        let purchasesPromise = null;

        if (userId) {
            purchasesPromise = PurchaseDataService.getByUserId(userId);
        } else {
            purchasesPromise = PurchaseDataService.getAll();
        }

        purchasesPromise.then(response => {
            setPurchases(response.data);
        }).catch(error => {
            // TODO: do something here
        });
    }

    return (
        <div>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Value</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        purchases.map(purchase => {
                            return (
                                <tr key={ purchase.id }>
                                    <td>{ purchase.id }</td>
                                    <td>Produto</td>
                                    <td>{ purchase.date }</td>
                                    <td>{ purchase.value }</td>
                                    <td>{ purchase.status }</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Purchases;
