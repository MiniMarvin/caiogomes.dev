import styled from 'styled-components';

const CustomInput = styled.input`
    border: none;
    border-radius: 5px;
    background-color: white;
    outline: none;
    height: 44px;
    border-width: 0px;
    width: calc(${props => props.width || '100%'} - 24px);
    margin-bottom: 12px;
    padding: 0px 12px;
    font-size: 16px;
`;

export default CustomInput;