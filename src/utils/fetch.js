import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

// Intercepteur pour gérer les erreurs globalement
API.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            // Erreur avec réponse du serveur
            console.error('Erreur API:', error.response.data);
            console.error('Status:', error.response.status);
        } else if (error.request) {
            // Pas de réponse du serveur
            console.error('Pas de réponse du serveur');
        } else {
            // Erreur dans la configuration de la requête
            console.error('Erreur de configuration:', error.message);
        }
        return Promise.reject(error);
    }
);

// Fonctions génériques CRUD
export const fetchApi = {
    // GET - Récupérer des données
    get: async (endpoint) => {
        try {
            console.log('Fetching:', endpoint);
            const response = await API.get(endpoint);
            console.log('Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    // POST - Créer une ressource
    post: async (endpoint, data) => {
        try {
            const response = await API.post(endpoint, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // PUT - Mettre à jour une ressource
    put: async (endpoint, data) => {
        try {
            const response = await API.put(endpoint, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // DELETE - Supprimer une ressource
    delete: async (endpoint) => {
        try {
            const response = await API.delete(endpoint);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default fetchApi;