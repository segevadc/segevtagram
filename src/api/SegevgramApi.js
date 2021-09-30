import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const SegevgramApi = {
    getPosts: (searchText) => axios.get(`${BASE_URL}/posts`),
/*
    getComments: (placeId) => axios.get(`${BASE_URL}/comments/${placeId}`),
    addComment: (comment) => axios.post(`${BASE_URL}/comments`, {...comment})
*/
}