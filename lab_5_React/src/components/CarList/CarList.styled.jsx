import styled from "styled-components";

export const List = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${(props) => props.bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 10px;
`

export const Modaltext = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212020;
    color: white;
    padding: 20px;
    border-radius: 20px;
`

export const Item = styled.div`
    cursor: pointer;
    padding: 10px;
    text-align: center;
    transition: transform 0.2s;

        &:hover{
            transform: scale(1.05);
        }
`

export const Image = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 20px;
`

export const ImageModal = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 20px;
`

export const TextParking = styled.p`
    color: black;
    font-size: 20px;
    text-align: center;
    padding: 15px;
`

export const ButtonDel = styled.button`
    background-color: #ff0000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #cc0000;
    }
`
export const ButtonEdit = styled.button`
    margin: 10px 20px;
    background-color: #136a13;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #249904;
    }
`