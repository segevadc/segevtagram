import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const SegevgramApi = {
    getPosts: (searchText) => axios.get(`${BASE_URL}/posts`),
    getComments: (postId) => axios.get(`${BASE_URL}/comments?postId=${postId}`),
    addComment: (comment) => axios.post(`${BASE_URL}/comments`, {...comment})
}