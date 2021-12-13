import api from './apiConfig';

export const getAllResortReviews = async (id) => {
	const resp = await api.get(`/resorts/${id}/reviews`);
	resp.data.map((review) => {
		if(id === review.resort_id) {
			return resp.data
		}
		return resp.data
	})
}

export const getOneResortReview = async (resortId, reviewId) => {
	const resp = await api.get(`/resorts/${resortId}/reviews/${reviewId}`);
	return resp.data
}

export const updateReview = async (resortId, reviewId, reviewData) => {
	const resp = await api.put(`/resorts/${resortId}/reviews/${reviewId}`, { review: reviewData });
	return resp.data;
}

export const deleteReview = async (resortId, reviewId) => {
	await api.delete(`/resorts/${resortId}/reviews/${reviewId}`);
}