import styled from 'styled-components'

export const HeaderElement = styled.header`
    background-color: #5b5b5b;
    height: 7vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;
`
export const HeaderLogo = styled.div`
    font-size: 20px;
    color: white;
`

export const HeaderNavList = styled.ul`
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