import { useState } from "react";
import { createPost } from "../api/api";

const PostForm = ({ onPostCreated }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image);

    await createPost(formData);
    setCaption("");
    setImage(null);
    onPostCreated();
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <input
        type="text"
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
