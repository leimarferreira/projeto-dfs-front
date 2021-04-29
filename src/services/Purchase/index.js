import api from '../shared/api';

const getAll = () => {
    return api.get("/purchase");
}

const get = id => {
    return api.get(`/purchase/${id}`);
}

const getByUserId = id => {
    return api.get(`/purchase/byuser/${id}`);
}

const create = data => {
    return api.post("/purchase", data);
}

const update = (id, data) => {
    return api.put(`/purchase/${id}`, data);
}

const remove = id => {
    return api.delete(`/purchase/${id}`);
}

const PurchaseDataService = {
    getAll,
    get,
    getByUserId,
    create,
    update,
    remove
}

export default PurchaseDataService;
