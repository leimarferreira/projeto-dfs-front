import api from '../shared/api';

const getAll = () => {
    return api.get("/product");
};

const get = id => {
    return api.get(`/product/${id}`);
};

const create = data => {
    return api.post("/product", data);
};

const update = (id, data) => {
    return api.put(`/product/${id}`, data);
};

const remove = id => {
    return api.delete(`/product/${id}`);
};

const ProductDataService = {
    getAll,
    get,
    create,
    update,
    remove,
};

export default ProductDataService;
