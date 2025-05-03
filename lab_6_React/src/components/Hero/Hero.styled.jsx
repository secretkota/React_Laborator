import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 676px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  color: white;
  font-size: 80px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: block;
  margin: 0;
`;

export const Subtitle = styled.div`
  color: white;
  margin-top: 20px;
  font-size: 24px;
  display: flex;
  text-align: center;
  white-space: pre-line;
`;

export const Btn = styled.button`
    margin-top: 50px;
    border-radius: 5px;
    text-align: center;
    padding: 15px;
    width: 250px;
    background-color: #383736;
    color: white;
    font-size: 16px;

    &:hover {
        background-color: #212020;
        box-shadow: 0 0 0 2px #cbd6ee;
    }
`