import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	headers: {
		token: 'Bearer this is djtokeorke',
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		// console.log({ error });
		// if (error.response.status === 404)
		// 	return Promise.reject({ ...error.response, message: 'sen sehvsen' });

		// if (error.response.status === 401)
		// 	return Promise.reject({ ...error.response, message: 'seen kimsen ae' });

		return Promise.reject(error.response);
	}
);
