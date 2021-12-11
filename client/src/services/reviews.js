import api from './apiConfig';

export const getAllResortReviews = async (id) => {
	const resp = await api.get(`/resorts/${id}/reviews`);
	resp.data.map((review) => {
		if(id == review.resort_id) {
			return resp.data
		}
	})
}