import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;

    h1 {
        margin: 0px;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

function MediumPost(props) {
    return (
        <a href={props.href} target='_blank'>
            <Container>
                <img src={props.img} />
                <h1>{props.title}</h1>
                <span>{props.description}</span>
                <Row>
                    <img src={props.userImg} />
                    <span>{props.username}</span>
                    {/* TODO: add clap count */}
                    <span>{props.date}</span>
                </Row>
            </Container>
        </a>
    );
}

export default MediumPost;