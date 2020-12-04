import styled from 'styled-components';
import bg from '../../assets/image/bg_red.png';

export const Display = styled.div`
    font-family: Digital-7;
    text-align: right;
    color: red;
    display: flex;
    font-size: 25px;
    line-height: 20px;
    height: 22px;
    Background: #000000;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: #808080 #FFFFFF #FFFFFF #808080;
    &>div {
        position: relative;
        width: 11.8px; 
    }
`;

export const Digit = styled.div`
    Background: #000000 url(${bg}) repeat center top;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.3;
    position: absolute;
    right: 0;
    top: 0;
`;
