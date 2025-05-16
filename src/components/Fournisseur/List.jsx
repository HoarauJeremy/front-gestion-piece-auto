import { useState, useEffect } from 'react';
import { fournisseurService } from '../../services/fournisseurService';
import './List.css';

const List = () => {
    const [fournisseurs, setFournisseurs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadFournisseurs();
    }, []);

    const loadFournisseurs = async () => {
        try {
            const data = await fournisseurService.getAllFournisseurs();
            setFournisseurs(data);
            setError(null);
        } catch (err) {
            setError('Erreur lors du chargement des fournisseurs');
            console.error('Erreur:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce fournisseur ?')) {
            try {
                await fournisseurService.deleteFournisseur(id);
                loadFournisseurs();
            } catch (err) {
                setError('Erreur lors de la suppression du fournisseur');
                console.error('Erreur:', err);
            }
        }
    };

    if (loading) return <div className="loading">Chargement...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="fournisseurs-list">
            <h2>Liste des Fournisseurs</h2>
            {fournisseurs.length === 0 ? (
                <p>Aucun fournisseur trouvé</p>
            ) : (
                <div className="fournisseurs-grid">
                    {fournisseurs.map((fournisseur) => (
                        <div key={fournisseur.id} className="fournisseur-card">
                            <h3>{fournisseur.nom}</h3>
                            <div className="fournisseur-info">
                                <p><i className="fas fa-envelope"></i> {fournisseur.email}</p>
                                <p><i className="fas fa-phone"></i> {fournisseur.telephone}</p>
                                <p><i className="fas fa-map-marker-alt"></i> {fournisseur.adresse}</p>
                            </div>
                            <div className="fournisseur-actions">
                                <button 
                                    onClick={() => handleDelete(fournisseur.id)}
                                    className="delete-btn"
                                >
                                    <i className="fas fa-trash"></i> Supprimer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default List;