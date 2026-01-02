import "./index.css";
import { useFetch } from "./hooks";

const url = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  id: number;
  title: string;
  body: string;
}

export function App() {

  const { data, loading, error } = useFetch<Post[]>(url);
  

  if (loading) {
    return <p className="text-blue-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error.message}</p>;
  }

  return (
    <>
      <div>
        {data && data.map((item: any) => (
          <div key={item.id} className="p-4 m-2 border rounded shadow">
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
