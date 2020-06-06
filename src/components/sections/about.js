import React from 'react';
import styled from 'styled-components';
import Section from './section';
import {PrimaryButton} from '../common/buttons/buttons';

const Title = styled.div`
    font-size: 36px;
`;

const Text = styled.p`
    font-size: 18px;
    margin-bottom: 40px;
`;

function About() {
    return (
        <Section>
            <Title>quem é caio?</Title>
            <Text>olá! bem, como você já sabe sou um app developer que tenta construir os melhores produtos possíveis, comecei a desenvolver software aos 12 anos e já ganhei algumas competições internacionais como scholarship na WWDC da Apple (2018 & 2019) e a ESDC da Intel (2018), além disso gosto muito de música e sou um grande intusiasta de saúde digital, quem sabe não podemos trabalhar juntos?</Text>
            <PrimaryButton href='#'>assinar newsletter</PrimaryButton>
        </Section>
    );
}

export default About;