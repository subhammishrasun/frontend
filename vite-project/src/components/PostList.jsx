import PostItem from "./PostItem";

const PostList = ({ posts, onUpdate }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default PostList;
