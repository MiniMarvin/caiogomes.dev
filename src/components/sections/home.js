import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import {PrimaryButton, SecondaryButton} from '../common/buttons/buttons';
import Section from './section';

const BigText = styled.h1`
    /* font-size: 48px; */
    font-size: 15vw;
    padding: 0px;
    margin: 0px;
`;

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

const AlignRight = styled.div`
    margin-left: auto;
    margin-right: 0;
    text-align: right;
`;

const GreenText = styled.span`
    color: ${theme.colors.springGreen};
`;

const OrangeText = styled.span`
    color: ${theme.colors.pizazz};
`;

const CustomImg = styled(Img)`
    border-radius: 50% 50% 50% 0px;
    border-color: ${theme.colors.cherokee};
    border-width: 0px;
    border-style: double;
`;

function Home() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "foto-alta-qualidade.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 140, height: 140) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return(
        <Section>
            <FlexRow>
                <BigText>> caio gomes</BigText>
            </FlexRow>
            <FlexRow>
                <div>
                    <CustomImg fixed={data.file.childImageSharp.fixed}></CustomImg>
                </div>
                <AlignRight>
                    <h2>
                        inovando em<br/>
                        <GreenText>apps</GreenText> <OrangeText>&</OrangeText><br/>
                        <GreenText>produtos</GreenText><br/>
                        <GreenText>digitais</GreenText>
                    </h2>
                </AlignRight>
            </FlexRow>
            <FlexRow>
                <h3>eu transformo ideias em produtos digitais de alta qualidade</h3>
            </FlexRow>
            <FlexRow>
                <SecondaryButton href='#'>conheça meu trabalho</SecondaryButton>
            </FlexRow>
            <FlexRow>
                <PrimaryButton href='#'>encomende agora seu app</PrimaryButton>
            </FlexRow>

        </Section>
    );
}

export default Home;