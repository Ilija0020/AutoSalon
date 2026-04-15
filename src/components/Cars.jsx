import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Cars = ({podaciAutomobila}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const odabraniAutoId = searchParams.get("auto");

    const filtriraniAutomobili = podaciAutomobila.filter(auto => auto.id === odabraniAutoId)
    const odabraniAuto = filtriraniAutomobili[0];


    return (
        <div>
            <div>
                {odabraniAuto ? (
                    <div>
                        <h2>Izracunaj cenu svog auta iz snova</h2>
                        <img src={odabraniAuto.image} alt={odabraniAuto.model.name} />
                        <p>Model automobila: {odabraniAuto.model.name}</p>
                        <p>Tip motora: {odabraniAuto.defaultEngine}</p>
                        <p>Boja automobila: {odabraniAuto.colorHex}</p>
                        <p>Tip boje automobila: {odabraniAuto.finish}</p>
                        <p>Opseg cene: {odabraniAuto.price.fromEUR}€ - {odabraniAuto.price.toEUR} €</p>

                    </div>
                ) : (
                    <div>
                        <p>Odaberite automobil sa liste da biste videli detalje.</p>
                    </div>
                )}
            </div>
            <div>
                {podaciAutomobila.map((automobil) =>(
                    <Link to={`/ponuda?auto=${automobil.id}`} key={automobil.id}>
                        <img src={automobil.image} alt={automobil.model.name} />
                        <p>Već od {automobil.price.fromEUR} EUR</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Cars;