import Styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/git-commits.jpg';

export const GlobalStyle = createGlobalStyle`
 html {
   height: 100%;
 }

 body {
   background-image: url(${BGImage});
   background-size: cover;
   margin: 0;
   padding: 0 20px;
   display: flex;
   justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px;

  h1 {
    font-family: 'Fascinate Inline', Haettenscheiler, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-sixe: 100%;
    background-clip: text;
    -webkit-backgroun-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    margin: 20px;
    text-align: center;
  }

  .fetchButton {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rbga(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 60px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 1.4rem;
    max-width: 250px;
  }
`;
