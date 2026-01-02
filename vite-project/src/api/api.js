import axios from "axios";

// Use environment variable if available, otherwise fallback
const BASE_URL =
  import.meta.env.VITE_API_URL || "https://backend-z85x.onrender.com";

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const getPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};

export const createPost = async (formData) => {
  const res = await api.post("/posts", formData);
  return res.data;
};

export const addComment = async (postId, text) => {
  const res = await api.post(`/posts/${postId}/comments`, { text });
  return res.data;
};
