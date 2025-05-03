import api from "../api.js";

export default {
    getCars: async () => {
        return (await api.get("/cars")).data
    },
    getCarById: async (id) => {
        return (await api.get(`/cars/${id}`)).data
    },
    createCar: async (car) => {
        return (await api.post("/cars", car)).data
    },
    deleteCar: async (id) => {
        return (await api.delete(`/cars/${id}`)).data
    },
}