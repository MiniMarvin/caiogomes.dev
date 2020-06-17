import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';

const CommonLinkStyle = styled.a`
    color: ${theme.colors.action};
    text-decoration: none;
    transition: color 0.8s;
    
    &:hover {
        color: ${theme.colors.hover};
    }

    &:active {
        color: ${theme.colors.ripple};
        transition: color 0s;
    }

    &:visited {
        color: ${theme.colors.action};
    }
`;

function CommonLink(props) {
    return (
        <CommonLinkStyle href={props.href}>{props.children}</CommonLinkStyle>
    );
}

export default CommonLink;