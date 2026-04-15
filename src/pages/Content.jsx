import React from "react";
import Locations from "../components/Locations";
import Cars from "../components/Cars";

const Content = ({lokacije, automobili}) => {
    return (
        <section>
            <div>
                <h1>Prodajne lokacije:</h1>
                <Locations podaciLokacije={lokacije}/>
            </div>
            <div>
                <Cars podaciAutomobila={automobili}/>
            </div>
        </section>
    )
}
export default Content;