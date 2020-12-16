import styled from 'styled-components'

export const Loader = styled.div`
  border: outset;

  position: absolute;
  top: calc(50% - 5rem);
  left: calc(50% - 11rem);

  & .loader-header {
    color: white;
    font-weight: bold;
    font-size: smaller;
    padding: 3px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 22%,
      rgba(0, 212, 255, 0.8) 100%
    );
    & img {
      height: 15px;
      margin-right: 5px;
    }
  }
  height: 10rem;
  background: ${props => props.theme.colors.secondary};
  @keyframes windload {
    0% {
      width: 0;
    }
    9% {
      width: 0;
    }
    10% {
      width: 10%;
    }
    19% {
      width: 10%;
    }
    20% {
      width: 20%;
    }
    29% {
      width: 20%;
    }
    30% {
      width: 30%;
    }
    39% {
      width: 30%;
    }
    40% {
      width: 40%;
    }
    49% {
      width: 40%;
    }
    50% {
      width: 50%;
    }
    59% {
      width: 50%;
    }
    60% {
      width: 60%;
    }
    69% {
      width: 60%;
    }
    70% {
      width: 70%;
    }
    79% {
      width: 70%;
    }
    80% {
      width: 80%;
    }
    89% {
      width: 80%;
    }
    90% {
      width: 90%;
    }
    99% {
      width: 90%;
    }
    100% {
      width: 100%;
    }
  }

  & .loader-body {
    display: inline-grid;
    align-content: end;
    row-gap: 1rem;
    position: relative;
    height: calc(100% - 25px);
    padding: 10px;
    & .progress-container {
      height: fit-content;
      ${props => `
          border-color: ${props.theme.border.color};
          border-radius: ${props.theme.border.radius};
          border-style: ${props.theme.border.style};
          border-image: ${props.theme.border.image};`}
      padding: 2px;
      width: 22rem;
      & .progress-bar {
        height: 1.5rem;
        background: rgba(9, 9, 121, 1);
        animation: windload 2.5s ease-out;
      }
    }
  }
`
