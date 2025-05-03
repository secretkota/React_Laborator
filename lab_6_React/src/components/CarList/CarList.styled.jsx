import styled from "styled-components";

export const List = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${(props) => props.bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 20px;
    position: relative;
`;

export const TextParking = styled.h2`
    color: white;
    font-size: 28px;
    text-align: center;
    grid-column: 1 / -1;
`;

export const Item = styled.div`
    cursor: pointer;
    padding: 10px;
    text-align: center;
    transition: transform 0.2s;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.05);
    &:hover {
        transform: scale(1.05);
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
`;

export const ImageModal = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 20px;
`;

export const Modaltext = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212020;
    color: white;
    padding: 20px;
    border-radius: 20px;
`;

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
`;

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
`;

export const FavoriteSection = styled.div`
    grid-column: 1 / -1;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

export const FavoriteTitle = styled.h3`
    color: white;
    font-size: 22px;
    margin-bottom: 10px;
`;

export const FavoriteList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`;

export const FavoriteItem = styled.div`
    width: 150px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 10px;
`;
