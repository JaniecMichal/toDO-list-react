import React from 'react';
import { SectionWrapper, SectionHeader, SectionTitle } from "./styled";

const Section = ({ title, body, extraContent }) => (
    <SectionWrapper>

        <SectionHeader>
            <SectionTitle>{title}</SectionTitle>

        </SectionHeader>
        <div>
            {extraContent}
            {body}
        </div>

    </SectionWrapper>
);

export default Section;