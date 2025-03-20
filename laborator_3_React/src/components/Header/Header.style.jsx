import styled from "styled-components";

export const HeaderElement = styled.header`
    background-color: rgba(35, 35, 35, 0.83);
    height: 7vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;
`
export const Logo = styled.div`
    font-size: 20px;
    color: white;
`

export const NavList = styled.ul`
    display: flex;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 16px;

    a {
        display: inline-block;
        margin-right: 3px;

        button {
            border-radius: 5px;
            text-align: center;
            padding: 4px 8px;
            background-color: #2e3239;
            color: white;
            font-size: 16px;

            &:hover {
                background-color: rgb(10, 18, 34);
                box-shadow: 0 0 0 2px #cbd6ee;
            }
        }
    }
`

export const LoginBtn = styled.button`
    border-radius: 5px;
    text-align: center;
    padding: 4px 8px;
    background-color: #005eff;
    color: white;
    font-size: 16px;

    &:hover {
        background-color: #022d78;
        box-shadow: 0 0 0 2px #cbd6ee;
    }
`