import React from 'react';
import { HeaderSection, HeaderTitle } from "./styled";

const Header = ({ mainTitle }) => (
    <HeaderSection>
        <HeaderTitle>{mainTitle}</HeaderTitle>
    </HeaderSection>
)

export default Header;