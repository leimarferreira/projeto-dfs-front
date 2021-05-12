import React, { useState, useEffect } from 'react';
import ProductDataService from '../../services/Product/index';
import PurchaseDataService from '../../services/Purchase/index';
import Credit from './Credit/index';
import PurchaseSummary from './PurchaseSummary/index';

const Payment = () => {
    const [userId, setUserId] = useState();
    const [productId, setProductId] = useState();
    const [product, setProduct] = useState({});
    const [purchase, setPurchase] = useState({});

    useEffect(() => {
        const url = new URL(window.location.href);
        const userId = url.searchParams.get("user");
        const productId = url.searchParams.get("product");
        setUserId(userId);
        setProductId(productId);
    }, []);

    useEffect(() => {
        if (productId) {
            retriveProduct(productId)
                .then(setProduct);
        }
    }, [productId]);

    useEffect(() => {
        setPurchase(purchase => {
            return {
                ...purchase,
                value: product.value,
                paymentMethod: "credit",
                status: "pending",
                productId,
                userId
            }
        });
    }, [product, userId, productId]);

    const retriveProduct = async productId => {
        try {
            const response = await ProductDataService.get(productId);
            return response.data;
        } catch (error) {

        }
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPurchase({ ...purchase, [name]: value });
    };

    const handleSubmit = () => {
        const date = new Date().toISOString();
        setPurchase({ ...purchase, date });
        PurchaseDataService.create(purchase)
            .then(response => {
                console.log(`Status da resposta: ${response.status}`);
            });
    };

    return (
        <div className="row mt-3 bg-light border rounded shadow">
            <h1 className="my-3 flex-column">Finish purchase</h1>

            <PurchaseSummary/>

            <div className="col-sm-8">
                <div className="row g-3 mt-3 p-3 bg-light border rounded shadow">
                    <Credit/>
                    
                    <div className="col-md-2">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input
                            className="form-control"
                            type="text"
                            id="cep"
                            name="postalCode"
                            placeholder="xxxxx-xx"
                            required
                            value={purchase.postalCode}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-md-10">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            className="form-control"
                            type="text"
                            id="address"
                            name="address"
                            required
                            value={purchase.address}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="note" className="form-label">Note</label>
                        <textarea
                            className="form-control"
                            type="text"
                            id="note"
                            name="note"
                            value={purchase.note}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="d-grid d-md-block">
                        <button onClick={handleSubmit} className="btn btn-dark d-md-flex ms-md-auto">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
