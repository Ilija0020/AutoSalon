import React from "react";

const About = () => {
    return (
        <section className="about-page-layout">
            <div className="modern-about-card">
                <div className="image-wrapper">
                    <img 
                        src="https://i.ibb.co/mFBKJGtf/Ilija-Slika-Za-CV.png" 
                        alt="Ilija Prekogačić" 
                    />
                </div>
                
                <div className="text-wrapper">
                    <span className="overline">O autoru</span>
                    <h2>Ilija Prekogačić</h2>
                    
                    <p>
                        Dobrodošli! Po struci sam diplomirani informatičar, a svoje programersko znanje trenutno usavršavam na <strong>FTN Informatici</strong>. 
                    </p>
                    <p>
                        Pre nego što sam se posvetio softverskom inženjerstvu, izgradio sam jedanaestogodišnju karijeru kao <strong>profesionalni vaterpolista</strong>. Sport me je naučio gvozdenoj disciplini, timskom radu i fokusiranom rešavanju problema – vrednostima koje danas prenosim u svaki kod koji napišem.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;