import styled from 'styled-components'

const buttonColor = '#DEF2f1'
const firstColor = '#FEFFFF'
const secondColor = '#17252A'
const InnerHeight = 16
const buttonSize = 2

export const Container = styled.div`
  position: relative;
  width: 75px;
  height: ${buttonSize * InnerHeight}px;
  display: inline-block;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  text-align: left;
`

export const Input = styled.input`
  display: none;
  &:checked + Label {
    .toggle-switch-inner {
      margin-left: 0;
    }
  }
  &:checked + Label {
    .toggle-switch-switch {
      right: 0;
    }
  }
`

export const Label = styled.label`
  height: ${InnerHeight}px;
  margin-top: ${(buttonSize * InnerHeight - InnerHeight) / 2}px;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #bbb;
  border-radius: 75px;
  background: ${secondColor};
`

export const SpanInner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  &:before,
  &:after {
    display: block;
    float: left;
    width: 50%;
    padding: 1rem;
    font-size: 1rem;
    color: white;
    font-weight: bold;
    box-sizing: border-box;
  }
  &:before {
    content: '';
    text-transform: uppercase;
    background-color: ${firstColor};
    color: ${secondColor};
  }
`

export const SpanSwitch = styled.span`
  display: block;
  width: 41%;
  background: ${buttonColor};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 58%;
  border: 0 solid #bbb;
  border-radius: 50%;
  transition: all 0.3s ease-in 0s;
  box-shadow: -2px 1px 3px 0px;
`
