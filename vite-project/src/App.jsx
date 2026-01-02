import { useEffect, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { getPosts } from "./api/api";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h2>Mini Social Media</h2>
      <PostForm onPostCreated={fetchPosts} />
      <PostList posts={posts} onUpdate={fetchPosts} />
    </div>
  );
}

export default App;
