import styled from 'styled-components';

export const Wrapper = styled.div`
  .commitContainer {
    margin: 50px auto;
    padding: 15px 50px;
    background-color: black;
  }

  .commitAuthorContainer,
  .commitDateContainer,
  .commitMessageContainer {
    color: #fff;
    font-size: 1.5rem;
    margin: 10px;
    width: 100%;
  }
  .commitTitle {
    margin-right: 20px;
    width: 30%;
  }
  .commitTitle,
  .commitInfo {
    display: inline-block;
  }
`;
