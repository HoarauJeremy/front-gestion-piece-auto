import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>À propos</h3>
                    <p>Gestion de pièces automobiles professionnelle</p>
                </div>
                
                <div className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li><i className="fas fa-phone"></i> +262 123 456 789</li>
                        <li><i className="fas fa-envelope"></i> contact@autoparts.re</li>
                        <li><i className="fas fa-map-marker-alt"></i> Saint-Denis, La Réunion</li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Liens rapides</h3>
                    <ul>
                        <li><a href="/piece">Pièces</a></li>
                        <li><a href="/fournisseur">Fournisseurs</a></li>
                        <li><a href="/stock">Stock</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {currentYear} Gestion Pièces Auto. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;