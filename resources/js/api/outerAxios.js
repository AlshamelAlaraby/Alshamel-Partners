import axios from "axios";
import Cookies from "js-cookie";

const outerAxios = axios.create({
    baseURL: `http://localhost:8001/api/`
});

outerAxios.interceptors.request.use(
    function (config) {
        config.headers['lang'] = localStorage.getItem("lang") || 'ar';
        config.headers['Authorization'] = "Bearer " + (Cookies.get("token") || '');
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
outerAxios.defaults.headers.common['secretApi'] = 'Snr92EUKCmrE06PiJ';
outerAxios.defaults.headers.common['Accept'] = 'application/json';

export default outerAxios;