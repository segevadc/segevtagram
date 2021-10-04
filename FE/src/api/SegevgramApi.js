import axios from "axios";

const BASE_URL = "http://localhost:3002";


export const SegevgramApi = {
    getPosts: (searchText) => axios.get(`${BASE_URL}/posts`),
    getPost: (id) => axios.get(`${BASE_URL}/posts/${id}`),
    getComments: (postId) => axios.get(`${BASE_URL}/comments?postId=${postId}`),
    /*getCommentsCount: (postId) => axios.get(`${BASE_URL}/comments?postId=${postId}`),
*/
    addComment: (comment) => axios.post(`${BASE_URL}/comments/add`, {...comment})
}
