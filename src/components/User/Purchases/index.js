import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Error from '../../common/Error';
import PurchaseDataService from '../../../services/Purchase/index';

const Purchases = () => {
    const { userId } = useParams();
    const [ purchases, setPurchases ] = useState([]);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        retrievePurchases()
            .then(setPurchaseDates)
            .then(setPurchases)
            .catch(setError);
    }, [userId]);
 
    const retrievePurchases = async () => {
        let response = await PurchaseDataService.getByUserId(userId);
        return response.data;
    };

    const setPurchaseDates = purchases => {
        let locales = ["pt-BR", "en-US"];

        let options = {
            dateStyle: "short",
            timeStyle: "medium"
        };

        let formatter = Intl.DateTimeFormat(locales, options);

        purchases = purchases.map(purchase => {
            let date = new Date(`${purchase.date}Z`);
            let newDate = formatter.format(date);
            purchase.date = newDate;
            return purchase;
        });

        return purchases;
    };

    const printReceipt = purchase => {
        let html = `
        <!DOCTYPE html>
        <html>
        <head>
        <style type="text/css" media="print">
        @page { size: auto; margin: 0mm; }
        </style>
        </head>
        <body>
        <h1 style="text-align: center;">Shop name</h1>
        <hr>
        <p>Nº ${purchase.id}</p>
        <hr>
        <p>${purchase.product.name} ${purchase.product.value}</p>
        <hr>
        <p>Total: ${purchase.value}</p>
        </body>
        </html>
        `;
        let win = window.open();
        win.document.write(html);
        win.print();
        win.close();
    }

    return error ? (
        <Error message={"An error has occurred while retrieving purchase history."}/>
    ) : (
        <div className="table-responsive mt-1 g-3 p-3 bg-light border rounded shadow">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Value</th>
                        <th>Status</th>
                        <th>Print</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        purchases.map(purchase => {
                            return (
                                <tr key={ purchase.id }>
                                    <td>{ purchase.id }</td>
                                    <td>
                                        <Link to={`/product/${purchase?.product?.id}`} className="text-dark">
                                            { purchase?.product?.name }
                                        </Link>
                                    </td>
                                    <td>{ purchase.date }</td>
                                    <td>{ purchase.value }</td>
                                    <td>{ purchase.status }</td>
                                    <td>
                                        <a href="#" onClick={() => printReceipt(purchase)}>
                                            print
                                        </a>
                                    </td>
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
