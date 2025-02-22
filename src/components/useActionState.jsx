import { useActionState } from "react";

async function updateName(name) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return name;
}
// useActionState : form 액션의 결과를 기반으로 state를 업데이트하는 hook
// 기존의 폼 액션 함수와 초기 state를 전달받고 폼에서 사용할 새 액션 반환
const UseActionState = () => {
  const [name, updateNameAction, isPending] = useActionState(
    async (previousName, formData) => {
      const newName = await updateName(formData.get("name"));
      return newName;
    },
    " " // 초기값
  );
  return (
    // form이 제출될 때 action에 함수를 전달한다
    // action 함수의 인자로 formData가 전달됨
    <form action={updateNameAction}>
      Current Name is {name}
      <input name="name" />
      <button type="submit" disabled={isPending}>
        {isPending ? "Updating..." : "Update"}
      </button>
    </form>
  );
};

export default UseActionState;
