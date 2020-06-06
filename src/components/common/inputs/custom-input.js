import React from 'react';
import styled from 'styled-components';

const CustomInput = styled.input`
    border: none;
    border-radius: 5px;
    background-color: white;
    outline: none;
    height: 44px;
    width: calc(${props => props.width || '100%'} - 24px);
    margin-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 16px;
`;

export default CustomInput;