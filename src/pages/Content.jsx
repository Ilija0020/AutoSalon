import React from "react";
import Locations from "../components/Locations";
import Cars from "../components/Cars";

const Content = ({lokacije, automobili}) => {
    return (
        <section className="content-page">
            <div className="sellers-section">
                <h2>Prodajne lokacije:</h2>
                <Locations podaciLokacije={lokacije}/>
            </div>
            <div className="cars-section">
                <Cars podaciAutomobila={automobili}/>
            </div>
        </section>
    )
}
export default Content;