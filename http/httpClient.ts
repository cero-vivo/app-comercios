import axios from "axios"
import axiosRetry from 'axios-retry';

export const httpClient = axios.create({
	baseURL: "https://api.comercios.com",
	timeout: 10000,
	auth: {
		username: "api-username",
		password: "api-password"
	}
})

axiosRetry(httpClient, { retries: 3 });