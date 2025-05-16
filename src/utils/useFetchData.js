import { useEffect, useState } from "react";
import axios from "axios";
import { ENTRYPOINT } from "../config/entrypoint.js";

/**
 * @param {Object} options
 * @param {string} options.url - Endpoint relatif (ex: 'fournisseurs')
 * @param {string} options.embeddedKey - Clé à extraire depuis _embedded (ex: 'fournisseurs')
 */
const useFetchData = ({ url, embeddedKey }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ENTRYPOINT}/${url}`);

        // Extraction dynamique selon la clé passée
        const embeddedData = response.data._embedded?.[embeddedKey];

        if (embeddedData) {
          setData(embeddedData);
        } else {
          setData([]);
          console.warn(`La clé _embedded.${embeddedKey} n'existe pas dans la réponse.`);
        }

        setError(null);
      } catch (err) {
        console.error("Erreur lors de la récupération des données :", err);
        setError("Erreur lors du chargement des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, embeddedKey]);

  return { data, loading, error };
};

export default useFetchData;
