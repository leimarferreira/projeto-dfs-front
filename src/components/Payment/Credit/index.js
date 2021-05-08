import React, { useState, useEffect } from 'react';
import PurchaseDataService from '../../../services/Purchase/index';
import ProductDataService from '../../../services/Product/index';

const Credit = () => {
    const [userId, setUserId] = useState();
    const [productId, setProductId] = useState();
    const [product, setProduct] = useState({});
    const [purchase, setPurchase] = useState({});
    /* const [paymentInfo, setPaymentInfo] = useState({
        name: "",
        cpf: "",
        cardNumber: "",
        month: "",
        year: "",
        code: "",
    }); */

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
        setPurchase({
            ...purchase,
            value: product.value,
            paymentMethod: "credit",
            status: "pending",
            productId,
            userId
        });
    }, [product, userId, productId]);

    const retriveProduct = async productId => {
        try {
            let response = await ProductDataService.get(productId);
            return response.data;
        } catch (error) {

        }
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPurchase({ ...purchase, [name]: value });
    };

    const handleSubmit = () => {
        let date = new Date().toISOString();
        setPurchase({ ...purchase, date });
        PurchaseDataService.create(purchase);
    };

    return (
        <div>
            <h1>Finish purchase</h1>
            <div className="form-group">
                <label htmlFor="cep">CEP</label>
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

            <div className="form-group">
                <label htmlFor="address">Address</label>
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

            <div className="form-group">
                <label htmlFor="note">Note</label>
                <textarea
                    className="form-control"
                    type="text"
                    id="note"
                    name="note"
                    value={purchase.note}
                    onChange={handleInputChange}
                />
            </div>

            <button onClick={handleSubmit} className="btn btn-primary btn-block">
                Submit
            </button>
        </div>
    );
};

export default Credit;
