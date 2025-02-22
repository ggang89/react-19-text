import { useOptimistic, useState } from "react";


// useOptimistic : 낙관적 업데이트를 구현하는 hook
// 폼에서 전송버튼을 클릭시, 서버로 전송되기전에 '전송중' 메시지 표시 => 속도와 반응성을 느끼게 해준다
function submitTitle(formData) {
  return new Promise((resolve, reject) => {
    const updateTitle = formData.get("title");

    if (!updateTitle) {
      reject(new Error("Title is required"));
      return;
    }
    setTimeout(() => {
      const n = Math.random();
      if (n < 0.75) {
        resolve(updateTitle);
      } else {
        reject(new Error("Failed to update title")); // Error 객체 사용
      }
    }, 2000);
  });
}

const UseOptimistic = () => {
  const [title, setTitle] = useState("title");
  const [optimisticTitle, setOptimisticTitle] = useOptimistic(title);
  const [error, setError] = useState(null);
  const pending = title !== optimisticTitle;
  const handleSubmit = async (formData) => {
    setError(null);
    setOptimisticTitle(formData.get("title"));
    try {
      const updatedTitle = await submitTitle(formData);
      setTitle(updatedTitle);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div>
      <h2>{optimisticTitle}</h2>
      <p>{pending && "Updating..."}</p>
      <form action={handleSubmit}>
        <input type="text" name="title" />
        <button type="submit" disabled={pending}>
          Submit
        </button>
      </form>
      <div>{error && error}</div>
    </div>
  );
};

export default UseOptimistic;
