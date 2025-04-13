import styled from "styled-components";

export const ModalMain = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    overflow-y: auto;
    transition: opacity 0.3s;
    z-index: 999;
`
export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
`

export const Content = styled.div`
    position: relative;
    margin: 20px;
    width: 100vw;
    max-width: 600px;
    border-radius: 20px;
    background-color: #fff;
    padding: 40px 20px 20px 20px;
    transform: translateY(-50px);
    transition: opacity 0.3s, transform 0.3s;
`

export const CloseBtn = styled.button`
    position: absolute;
    top: 16px;
    left: 16px;
    width: 30px;
    height: 30px;
    padding: 0;
    background-color: transparent;
`