import "./index.css";
// import { useFetch } from "./hooks";
import { Button, ChildrenButton } from "./components";

// const url = "https://jsonplaceholder.typicode.com/posts";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

export function App() {

  // const { data, loading, error } = useFetch<Post[]>(url);
  

  // if (loading) {
  //   return <p className="text-blue-500">Loading...</p>;
  // }

  // if (error) {
  //   return <p className="text-red-500">{error.message}</p>;
  // }

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const alertClick = () => {
    alert("Alert from App component!");
  };

  return (
    <>
      {/* <div>
        {data && data.map((item: any) => (
          <div key={item.id} className="p-4 m-2 border rounded shadow">
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div> */}


      {// Prop drilling example
      // Literalmente lo que estamos haciendo es pasar una informacion y del button pasarselo al children
      // Con este esquema Button si o si va a estar como puente
      // App - Button - Button
      // Para solucionar esto se podria usar servicios
      }
      <Button parentMethod={alertClick} >
        <ChildrenButton>
          <span className="text-white">Click Me!</span>
        </ChildrenButton>
      </Button>

      <Button parentMethod={handleClick} >
        <p>Normal Button</p>
        </Button>
    </>
  );
}

export default App;
