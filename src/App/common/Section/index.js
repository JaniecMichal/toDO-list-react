import React from 'react';
import { SectionWrapper, SectionHeader, SectionTitle } from "./styled";

const Section = ({ title, body, extraContent, headerExtraContent }) => (
    <SectionWrapper>

        <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
            <div>{headerExtraContent}</div>
        </SectionHeader>
        <div>
            {extraContent}
            {body}
        </div>

    </SectionWrapper>
);

export default Section;