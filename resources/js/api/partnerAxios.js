import axios from "axios";
import Cookies from "js-cookie";

const partnerAxios = axios.create({
    baseURL: `http://127.0.0.1:8001/api/`
});

partnerAxios.interceptors.request.use(
    function (config) {
        config.headers['lang'] = localStorage.getItem("lang") || 'ar';
        config.headers['Authorization'] = "Bearer " + (Cookies.get("token") || '');
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
partnerAxios.defaults.headers.common['secretApi'] = 'Snr92EUKCmrE06PiJ';
partnerAxios.defaults.headers.common['Accept'] = 'application/json';

export default partnerAxios;