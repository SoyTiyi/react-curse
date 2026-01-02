import "./index.css";
import { Button } from "./components";
import { useState, useEffect } from "react";

export function App() {
  // Hace un hook (enganchar) el estado del componente
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Failed to fetch data');
    }
  };

  // cuando queremos traer data del backend lo que debemos
  // es comunicarnos a traves de un endpoint

  // Maneja el ciclo de vida de un componente - (Como todos lo explican)

  // Explicacion del profe:
  // el uso correcto que se le da al useEffect es para sync con
  // entidades externas al componente
  // Ejemplo:
  // 1. Operaciones async
  // 2. Parametros de entrada (props) vienen del padre
  // 3. Comunicarnos con APIs
  // 4. Cuando trabajas con un context
  useEffect(() => {
    //Que debe de haber en este metodo?
    // Aca hay logica, cuando se ejecuta esta logica???
    // 1. Se ejecuta cuando se monta el componente
    // 2. Se ejecuta cada vez que se modifique uno de los valores del state
    // que este en el arreglo de dependencias, si yo no pongo el arreglo de dependencias
    // hace que esta logica se ejecute cada vez que haya un cambio en el estado del componente
    // 3.
    fetchData();
    // si pones un return dentro del useEffect, ese return se ejecuta cuando
    // el componente se va a desmontar o muera
    // generalmente se usa para hacer limpieza de recursos y liberar memoria

    // return () => {
    //   console.log("El componente se va a desmontar");
    // };

    //ademas de la funcion tambien acepta un arreglo de dependencias
  }, []);

  //Hay veces que se pueden usar mas de dos useEffect en un mismo componente
  //Tener uno para montar, uno para cambiar data, etc

  return (
    <>
      <div>
        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {data.map((item: any) => (
  
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
