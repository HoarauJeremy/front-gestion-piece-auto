import {useEffect, useState} from "react";

const List = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/fournisseur');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <>
      {data && data.map((item) => (
        <li key={item.id}></li>
      ))}
    </>
  );
}

export default List;