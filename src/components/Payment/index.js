import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductDataService from '../../services/Product/index';
import PurchaseDataService from '../../services/Purchase/index';
import Credit from './Credit/index';
import PurchaseSummary from './PurchaseSummary/index';
import Error from '../common/Error/index';

const Payment = () => {
    const history = useHistory();
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState();
    const [productId, setProductId] = useState();
    const [product, setProduct] = useState({});
    const [purchase, setPurchase] = useState({
        value: null,
        date: null,
        status: "pending",
        paymentMethod: "credit",
        note: "",
        postalCode: "",
        address: "",
        productId: null,
        userId: null
    });

    useEffect(() => {
        const url = new URL(window.location.href);
        const userId = url.searchParams.get("user");
        const productId = url.searchParams.get("product");
        setUserId(userId);
        setProductId(productId);
        retriveProduct(productId)
            .then(setProduct)
            .catch(setError);
    }, []);

    useEffect(() => {
        setPurchase(purchase => {
            return {
                ...purchase,
                value: product.value,
                productId,
                userId
            }
        });
    }, [product, userId, productId]);

    const retriveProduct = async productId => {
        const response = await ProductDataService.get(productId);
        return response.data;
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPurchase({ ...purchase, [name]: value });
    };

    const handleSubmit = () => {
        const date = new Date().toISOString();
        const data = {
            ...purchase,
            date
        }
        PurchaseDataService.create(data)
            .then(() => history.push("/product"))
            .catch(setError);
    };

    return error ? (
        <Error message={"An error has occurred. Please fill all fields correctly."} />
    ) : (
        <div className="row mt-3 bg-light border rounded shadow">
            <h1 className="my-3 flex-column">Finish purchase</h1>

            <PurchaseSummary purchase={purchase}/>

            <div className="col-lg-8">
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
