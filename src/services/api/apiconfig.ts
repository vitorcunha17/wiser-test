import axios, { AxiosError } from 'axios';

const api = axios.create({
    // baseURL: 'http://127.0.0.1:3333/v1/',
    baseURL: 'http://api.creditbook.luby.com.br/v1/',
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        err.message = handleError(err);
        return Promise.reject(err);
    }
);

function handleError(err: AxiosError) {
    let message = 'Erro desconhecido, tente novamente em breve';
    if (!err.response) {
        message =
            'Não foi possivel comunicar com o servidor, tente novamente em alguns minutos';
    } else if (err.response.data.error) {
        ({ message } = err.response.data.error);
    } else if (Array.isArray(err.response.data)) {
        ({ message } = err.response.data[0]);
    } else if (err.response.data) {
        ({ message } = err.response.data);
    }
    return message;
}

export default api;
