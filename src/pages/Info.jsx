import React from "react";
import Locations from "../components/Locations";

const Info = ({ lokacije}) => {
    return (
        <section className="sellers-section info-page-layout">
            <h1 className="section-title">Sve naše lokacije: </h1>
            <Locations podaciLokacije={lokacije}/>
        </section>
    )
}

export default Info;