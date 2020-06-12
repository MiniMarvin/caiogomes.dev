import React from 'react';
import styled from 'styled-components';
import Section from './section';
import {PrimaryButton} from '../common/buttons/buttons';
import theme from  '../../theme';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";

const Title = styled.div`
    font-size: 36px;
`;

const Text = styled.p`
    font-size: 18px;
    margin-bottom: 40px;
`;

const Partial = styled.div`
    display: flex;
    flex-direction: row;
`;

const PartialCol = styled.div`
    width: 100%;
    overflow: hidden;
    justify-content: center;
    display: flex;
`;

const CustomImg = styled(Img)`
    border-radius: 0px 186px 186px 186px;
    border: none;
    object-fit: cover;
    overflow: hidden;
`;

function smallScreen() {
    return (
        <Section>
            <Title>quem é caio?</Title>
            <Text>olá! bem, como você já sabe sou um app developer que tenta construir os melhores produtos possíveis, comecei a desenvolver software aos 12 anos e já ganhei algumas competições internacionais como scholarship na WWDC da Apple (2018 & 2019) e a ESDC da Intel (2018), além disso gosto muito de música e sou um grande intusiasta de saúde digital, quem sabe não podemos trabalhar juntos?</Text>
            <PrimaryButton href='#'>assinar newsletter</PrimaryButton>
        </Section>
    );
}

function bigScreen(data) {
    return (
        <Partial>
            <PartialCol>
                <CustomImg fixed={data.file.childImageSharp.fixed}></CustomImg>
            </PartialCol>
            <PartialCol>
                <Section>
                    <Title>quem é caio?</Title>
                    <Text>olá! bem, como você já sabe sou um app developer que tenta construir os melhores produtos possíveis, comecei a desenvolver software aos 12 anos e já ganhei algumas competições internacionais como scholarship na WWDC da Apple (2018 & 2019) e a ESDC da Intel (2018), além disso gosto muito de música e sou um grande intusiasta de saúde digital, quem sabe não podemos trabalhar juntos?</Text>
                    <PrimaryButton href='#'>assinar newsletter</PrimaryButton>
                </Section>
            </PartialCol>
        </Partial>
    );
}

function About() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "me-tech 1.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 376, height: 587) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);


    return (
        <>{window.innerWidth < theme.limitSize ? smallScreen() : bigScreen(data)}</>
    );
}

export default About;