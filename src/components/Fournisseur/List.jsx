import useFetchData from "../../utils/useFetchData";

const List = () => {
  const { data, loading, error } = useFetchData({
    url: "fournisseurs",
    embeddedKey: "fournisseurs"
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {data.map((fournisseur, index) => (
        <li key={index}>{fournisseur.nom}</li>
      ))}
    </ul>
  );
};

export default List;
