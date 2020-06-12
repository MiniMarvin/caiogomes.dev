import React from 'react';
import styled  from 'styled-components';
import theme from '../../../theme';


const PrimaryLink = styled.a`
    background-color: ${theme.colors.action};
    color: white;
    border-radius: 5px;
    border: none;
    height: 44px;
    width: ${props => props.width || '100%'};
    text-decoration: none;
    display: inline-block;
    line-height: 44px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;

    /* Ripple */
    background-position: center;
    transition: background 0.8s;
    
    &:hover {
        background: ${theme.colors.hover} 
            radial-gradient(circle, transparent 1%, ${theme.colors.hover} 1%) center/15000%;
    }
    &:active {
        background-color: ${theme.colors.ripple};
        background-size: 100%;
        transition: background 0s;
    }
`;

const SecondaryLink = styled.a`
    background-color: transparent;
    color: ${theme.colors.action};
    border-radius: 5px;
    border: none;
    height: 44px;
    width: ${props => props.width || '100%'};
    text-decoration: none;
    display: inline-block;
    line-height: 44px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;

    /* Ripple */
    transition: color 0.8s;
    
    &:hover {
        color: ${theme.colors.hover};
    }

    &:active {
        color: ${theme.colors.ripple};
        transition: color 0s;
    }
`;

const IconLink = styled.a`
    background-color: ${theme.colors.action};
    color: white;
    border-radius: 5px;
    border: none;
    height: 24px;
    width: 24px;
    max-width: 24px;
    max-height: 24px;
    padding: 4px;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    /* padding: 4px; */
    margin: 4px;

    /* Ripple */
    background-position: center;
    transition: background 0.8s;
    
    &:hover {
        background: ${theme.colors.hover} 
            radial-gradient(circle, transparent 1%, ${theme.colors.hover} 1%) center/15000%;
    }
    &:active {
        background-color: ${theme.colors.ripple};
        background-size: 100%;
        transition: background 0s;
    }

    /* &:first-child {
        width: 36px;
        height: 36px;
        max-width: 36px;
        max-height: 36px;
        padding: 4px;
    } */
`;

function PrimaryButton(props) {
    return(
        <PrimaryLink width={props.width} href={props.href} className={props.className} target='_blank' primary={true}>
            {props.children}
        </PrimaryLink>
    );
}

function SecondaryButton(props) {
    return (
        <SecondaryLink width={props.width} href={props.href} className={props.className} target='_blank'>
            {props.children}
        </SecondaryLink>
    );
}

function IconButton(props) {
    return(
        <IconLink href={props.href} target='_blank'>
            {props.children}
        </IconLink>
    )
}


export { PrimaryButton, SecondaryButton, IconButton };