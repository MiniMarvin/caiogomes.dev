import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    padding: 25px;
    text-align: left;
    max-width: 360px;
    margin: 0px;

    h1 {
        margin: 0px;
        width: 100%;
    }

    img {
        border-radius: 5px;
        margin: 0px auto 20px auto;
        max-width: 80%;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 10px;

    img {
        margin: 0px;
    }
`;

const CustomLink = styled.a`
    text-decoration: none;
    margin: 0px;
`;

const Subtitle = styled.span`
    margin-top: 5px;
    width: 100%;
`;

function MediumPost(props) {
    return (
        <CustomLink href={props.href} target='_blank'>
            <Container>
                <img src={props.img} />
                <h1>{props.title}</h1>
                <Subtitle>{props.description}</Subtitle>
                <Row>
                    <img src={props.userImg} />
                    <span>{props.username}</span>
                    {/* TODO: add clap count */}
                    <span>{props.date}</span>
                </Row>
            </Container>
        </CustomLink>
    );
}

export default MediumPost;