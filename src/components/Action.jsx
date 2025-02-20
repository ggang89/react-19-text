import { useState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return <button disabled={pending }type="submit">{pending?"Submitting...":"Submit"}</button>;
};

const PostForm = ({ addPost }) => {
  const formAction = async (formData) => {
    const newPost = {
      title: formData.get("title"), //input에 입력한 값을 가져옴
    };
    // 비동기 작업도 가능
    await new Promise((resolve) => setTimeout(resolve, 1000));
    addPost(newPost);
  };
  return (
    <form action={formAction}>
      <input type="text" name="title" />
      <SubmitButton />
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
