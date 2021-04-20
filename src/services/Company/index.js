import api from '../shared/api';

const getAll = () => {
    return api.get("/company");
};

const get = id => {
    return api.get(`/company/${id}`);
};

const create = data => {
    return api.post("/company", data);
};

const update = (id, data) => {
    return api.put(`/company/${id}`, data);
};

const remove = id => {
    return api.delete(`/company/${id}`);
};

const CompanyDataService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default CompanyDataService;
