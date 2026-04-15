import React from "react";

const Locations = ({podaciLokacije}) => {
    return (
        <div>
            {podaciLokacije.map((lokacija, index) => (
            <div key={index}>
                <h3>{lokacija.name}</h3>
                <p>{lokacija.address}, {lokacija.city}</p>
            </div>
            ))}
        </div>
    )
}
export default Locations;