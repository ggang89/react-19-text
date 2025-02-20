import { useState } from "react";

const PostForm = ({ addPost }) => {
  const formAction = async (formData) => {
    const newPost = {
      title: formData.get("title"), //input에 입력한 값을 가져옴
    };
    await new Promise((resolve) => setTimeout(resolve, 1000));
    addPost(newPost);
  };
  return (
    <form action={formAction}>
      <input type="text" name="title" />
      <button type="submit">Submit</button>
    </form>
  );
};

const Action = () => {
  const [posts, setPosts] = useState([]);
  const addPost = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
  };
  return (
    <div>
      <PostForm addPost={addPost} />
      {posts.map((post, index) => (
        <h2 key={index}>{post.title}</h2>
      ))}
    </div>
  );
};

export default Action;
