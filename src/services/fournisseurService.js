import { fetchApi } from '../utils/fetch';

const FOURNISSEUR_API = '/fournisseurs';

export const fournisseurService = {
    // Récupérer tous les fournisseurs
    getAllFournisseurs: () => {
        return fetchApi.get(FOURNISSEUR_API);
    },

    // Récupérer un fournisseur par ID
    getFournisseurById: (id) => {
        return fetchApi.get(`${FOURNISSEUR_API}/${id}`);
    },

    // Créer un nouveau fournisseur
    createFournisseur: (fournisseur) => {
        return fetchApi.post(FOURNISSEUR_API, fournisseur);
    },

    // Mettre à jour un fournisseur
    updateFournisseur: (id, fournisseur) => {
        return fetchApi.put(`${FOURNISSEUR_API}/${id}`, fournisseur);
    },

    // Supprimer un fournisseur
    deleteFournisseur: (id) => {
        return fetchApi.delete(`${FOURNISSEUR_API}/${id}`);
    }
};

export default fournisseurService;
