import axios from "axios";

//https://web-production-4430.up.railway.app

const API = axios.create({ baseURL: "https://kzone.onrender.com/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
  }

  return req;
});
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`${"/posts"}/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`${"/posts"}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`${"/posts"}/${id}`);
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(`/posts/search?searchQuery=${searchQuery.search || "none"}`);
