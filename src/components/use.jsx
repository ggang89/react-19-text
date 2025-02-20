import  { Suspense, use } from "react";

const getText = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 2000);
  })
};

const TextItem = () => {
  let trueOrNot = true; // 작동안함..
  let text = 'use()는 if문에서도 사용가능';
  if (trueOrNot) {
     text = use(getText());
  }
  return <h2>{text}</h2>;
};
const Use = () => {
  // const [text,setText] = useState('');
  // const [loading, setLoading]=useState(true);

  // useEffect(() => {
  //   const fetchText = async () => {
  //     try {
  //       const result = await getText();
  //       setText(result);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }

  //   }
  //   fetchText();
  // }, [])

 // if (loading) return <h2>Loading...</h2>;

  return (
    <Suspense fallback="loading...">
      <TextItem  />
    </Suspense>
  );
};

export default Use;
