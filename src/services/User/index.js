import api from '../shared/api';

const getAll = () => {
    return api.get("/user");
};

const get = id => {
    return api.get(`/user/${id}`);
};

const create = data => {
    return api.post("/user", data);
};

const update = (id, data) => {
    return api.put(`/user/${id}`, data);
};

const remove = id => {
    return api.delete(`/user/${id}`);
};

const UserDataService = {
    getAll,
    get,
    create,
    update,
    remove,
};

export default UserDataService;
