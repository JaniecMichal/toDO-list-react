import React from "react";
import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

export default () => (
    <Container>
        <Header mainTitle="React ToDO list by {Imperator}" />
        <Section
            title="O Autorze"
            body=
            {
                <>
                    <p>
                        Nazywam się Michał Janiec i jestem początkującym <i>frontend developerem</i>.
                        Postanowiłem wziąć udział w kursie szkoły <strong>YouCode</strong> aby poznań dobre praktyki programistyczne i przyśpieszyć naukę.
                        Obecnie pracuję jako doradca techniczny w firmie, która zajmuje się sprzedażą urządzeń elektrycznych.
                        Poza programowaniem interesuję się sportem, od wielu lat kibicuję najlepszej drużynie w piłce nożnej na świecie tj. Realowi Madryt,
                        ale interesuję się również historią i polityką.
                        W czasie kiedy nie chodzę do swojej obecnej pracy i nie programuje spędzam czas z moim małym synem Dominikiem.
                    </p>
                </>
            }
        />
        <Footer />
    </Container>
);