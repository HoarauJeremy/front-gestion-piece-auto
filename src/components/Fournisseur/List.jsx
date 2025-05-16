import useFetchData from "../../utils/useFetchData";

const List = () => {
  const { data, loading, error } = useFetchData({
    url: "fournisseur",
    embeddedKey: "fournisseurs"
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  console.log(data)

  return (
    <ul>
      {data.map((fournisseur, index) => (
        <li key={index}>Nom : {fournisseur.nom} - adresse : {fournisseur.adresse} - telephone : {fournisseur.telephone}</li>
      ))}
    </ul>
  );
};

export default List;
