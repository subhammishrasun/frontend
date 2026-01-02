import CommentSection from "./CommentSection";

const PostItem = ({ post, onUpdate }) => {
  return (
    <div className="post-card">
      <img
        src={`http://localhost:5000${post.imageUrl}`}
        alt="post"
        className="post-image"
      />

      <p className="post-caption">{post.caption}</p>
      <small className="post-time">
        {new Date(post.createdAt).toLocaleString()}
      </small>

      <CommentSection
        postId={post._id}
        comments={post.comments}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default PostItem;
