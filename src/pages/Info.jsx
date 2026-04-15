import React from "react";
import Locations from "../components/Locations";

const Info = ({ lokacije}) => {
    return (
        <section>
            <h1>Ovde ce se nalaziti sve nase lokacije...</h1>
            <Locations podaciLokacije={lokacije}/>
        </section>
    )
}

export default Info;