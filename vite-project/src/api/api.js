import axios from "axios";

const VITE_API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getPosts = async () => {
  const res = await VITE_API.get("/posts");
  return res.data;
};

export const createPost = async (formData) => {
  const res = await VITE_API.post("/posts", formData);
  return res.data;
};

export const addComment = async (postId, text) => {
  if (!postId) throw new Error("Post ID is missing");

  const res = await VITE_API.post(`/posts/${postId}/comments`, {
    text
  });

  return res.data;
};
