import React from "react";
import {MainWrapper} from "./styled";

const Container = ({ children }) => (
    <MainWrapper>
        {children}
    </MainWrapper>
);

export default Container;