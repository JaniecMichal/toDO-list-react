import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom"

export const NavWrapper = styled.nav`
    max-width:100%;
    background-color:teal;
    padding:30px;
`;

export const NavList = styled.ul`
    display:flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items:center;
`;

export const NavListItem = styled.li`
    list-style-type: none;
    margin-right:80px;

    ${({ lastItem }) => lastItem && css`
    margin-right:0px;
    `}
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    color:white;
    font-weight:bold;
    font-size:18px;
    text-transform:uppercase;
`;