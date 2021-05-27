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
        // eslint-disable-next-line
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
        .right { float: right; }
        .bold { font-weight: bold; }
        </style>
        </head>
        <body>
        <h1 style="text-align: center;">Purchase receipt</h1>
        <hr>
        <p><span class="bold">Nº</span><span class="right">${purchase.id}</span></p>
        <p><span class="bold">Vendor</span><span class="right">${purchase?.product?.company?.legalName}</p>
        <p><span class="bold">Customer</span><span class="right">${purchase.buyer.name}</span></p>
        <p><span class="bold">CPF</span><span class="right">${purchase.buyer.cpf}</span></p>
        <p><span class="bold">Date</span><span class="right">${purchase.date}</span></p>
        <hr>
        <p class="bold">Product <span class="right">Value</span></p>
        <p>${purchase.product.name}<span class="right">$${purchase.product.value}</span></p>
        <hr>
        <p><span class="bold">Total</span><span class="right">$${purchase.value}</span></p>
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
                                        <button className="btn btn-link" onClick={() => printReceipt(purchase)}>
                                            print
                                        </button>
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
