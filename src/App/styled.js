import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom"

export const NavWrapper = styled.nav`
    max-width:100%;
    background-color:${({ theme }) => theme.color.teal};
    padding:20px;
`;

export const NavList = styled.ul`
    display:flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items:center;

    @media (max-width:790px){
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
`;

export const NavListItem = styled.li`
    list-style-type: none;
    margin-right:50px;

    ${({ lastItem }) => lastItem && css`
    margin-right:0px;
    `}

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
        margin-bottom:15px;
        margin-right:0px;
    }
`;

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName}{
        color:${({ theme }) => theme.color.black};
        border:2px solid ${({ theme }) => theme.color.black};
    }

    text-decoration:none;
    color:${({ theme }) => theme.color.white};
    font-weight:bold;
    font-size:22px;
    text-transform:uppercase;
    padding:10px;

    &:hover{
        color:${({ theme }) => theme.color.black};
    }
`;