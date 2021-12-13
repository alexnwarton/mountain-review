import api from './apiConfig';

export const getResorts = async () => {
	const resp = await api.get('/resorts');
	return resp.data;
}

export const getOneResort = async (id) => {
	const resp = await api.get(`/resorts/${id}`);
	return resp.data;
}

export const createReview = async (id, reviewData) => {
	const resp = await api.post(`/resorts/${id}/reviews`, { review: reviewData });
	return resp.data;
}