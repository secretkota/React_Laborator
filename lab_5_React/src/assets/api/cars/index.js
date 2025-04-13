import api from "../api.js";

export default {
    getCars: async () => {
        return (await api.get("/cars")).data
    },
    createCar: async (car) => {
        return (await api.post("/cars", car)).data
    }
}