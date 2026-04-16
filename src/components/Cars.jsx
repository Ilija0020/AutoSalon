import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Cars = ({podaciAutomobila}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const odabraniAutoId = searchParams.get("auto");

    const filtriraniAutomobili = podaciAutomobila.filter(auto => auto.id === odabraniAutoId);
    const odabraniAuto = filtriraniAutomobili[0] || podaciAutomobila[0];


    return (
        <div className="cars-container">
            {/* Leva strana - Veliki prikaz i detalji */}
            <div className="car-details-wrapper">
                    <div className="car-showcase">
                        <div className="car-image-container">
                            <img src={odabraniAuto.image} alt={odabraniAuto.model.name} />
                        </div>
                        
                        <div className="car-info-container">
                            <div className="info-header">
                                <h2>Izračunaj cenu svog auta iz snova</h2>
                                <p>Počevši od {odabraniAuto.price.fromEUR}€</p>
                            </div>
                            
                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="label">Model automobila:</span>
                                    <span className="value">{odabraniAuto.model.name}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">Tip motora:</span>
                                    <span className="value">{odabraniAuto.defaultEngine}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">Boja automobila:</span>
                                    <div className="color-value">
                                        <span className="color-swatch" style={{ backgroundColor: odabraniAuto.colorHex }}></span>
                                        <span className="value">{odabraniAuto.colorHex}</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="label">Tip boje automobila:</span>
                                    <span className="value">{odabraniAuto.finish}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">Opseg cene:</span>
                                    <span className="value">{odabraniAuto.price.fromEUR}€ - {odabraniAuto.price.toEUR}€</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">Kontakt mejl:</span>
                                    <span className="value">primer@email.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            {/* Desna strana - Mreža malih kartica */}
            <div className="cars-list">
                {podaciAutomobila.map((automobil) =>(
                    <Link 
                        to={`/ponuda?auto=${automobil.id}`} 
                        key={automobil.id}
                        className={`car-card ${automobil.id === odabraniAuto.id ? "active" : ""}`}
                    >
                        <img src={automobil.image} alt={automobil.model.name} />
                        <p>Već od {automobil.price.fromEUR}€</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Cars;