import styled from 'styled-components'
import { CLASSIC } from '../../constants/theme'

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  ${props =>
    props.theme.title === CLASSIC
      ? `
        margin-bottom: 8px;
        padding-left: 8px;
        padding-right: 8px;
        border-width: 2px;
        border-style: solid;
        border-image: initial;
        border-color: #808080 #FFFFFF #FFFFFF #808080;
    `
      : ''}
`

export const Button = styled.div`
  ${props =>
    props.theme.title === CLASSIC
      ? `
        width: 26px;
        padding-top:26px;
        position: relative;
        &>img {
            position: absolute;
            top: 0;
            left: 0;
        }
    `
      : `
    display: block;
    background-color: #f7f7f7;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#f7f7f7), to(#e7e7e7));
    background-image: -webkit-linear-gradient(top, #f7f7f7, #e7e7e7); 
    background-image: -moz-linear-gradient(top, #f7f7f7, #e7e7e7); 
    background-image: -ms-linear-gradient(top, #f7f7f7, #e7e7e7); 
    background-image: -o-linear-gradient(top, #f7f7f7, #e7e7e7); 
    color: #a7a7a7;
    margin: 36px;
    width: 70px;
    height: 70px;
    position: relative;
    text-align: center;
    line-height: 112px;
    border-radius: 50%;
    box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
    &:before {
        content: "";
        display: block;
        background: #fff;
        border-top: 2px solid #ddd;
        position: absolute;
        top: -18px;
        left: -18px;
        bottom: -18px;
        right: -18px;
        z-index: -1;
        border-radius: 50%;
        box-shadow: inset 0px 8px 48px #ddd;
    }
    &:hover {
        text-decoration: none;
        color: #555;
        background: #f5f5f5;
    }
    `}
`

export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: -4px;
  z-index: 0;
  &:before {
    content: '';
    display: block;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #fff;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: -1;
  }
`
