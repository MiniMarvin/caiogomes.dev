import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import {PrimaryButton, SecondaryButton, IconButton} from '../common/buttons/buttons';
import Section from './section';
import CommonLink from '../common/links/common-link';

const limitSize = 600;

const BigText = styled.h1`
    /* font-size: 48px; */
    font-size: 15vw;
    padding: 0px;
    margin: 0px;

    @media (min-width: 414px) {
        font-size: 14.5vw;
    }

    @media (min-width: ${limitSize}px) {
        /* TODO: fine tune those sizes */
        font-size: 6.5vw;
        margin-top: 50px;
    }

    @media (min-width: ${limitSize*1.5}px) {
        /* TODO: change the size for multiple images */
        font-size: 72px;
        margin-top: 50px;
    }
`;

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

    @media (min-width:${limitSize}px) {
        h1,h2,h3,h4,h5,h6,p,span {
            margin: 0px;
            padding: 0px;
        }
    }
    
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
    border-style: solid;

    @media (min-width: ${limitSize}px) {
        border-radius: 50% 0px 0px 50%;
        width:100%;
        height:100%;
        object-fit: cover;
        overflow: hidden;
    }
`;

const Partial = styled.div`
    display: flex;
    flex-direction: row;
`;

const PartialCol = styled.div`
    width: 100%;
    overflow: hidden;
`;

const ImgContainer = styled.div`
    width: 100%;
    /* padding-bottom: 100%; */
`;

const LimitContainer = styled.div`
    width: 80%;
    height: 100%;
    margin-left: auto;
    display: flex;
    align-items: center;
`;

const Spacer = styled.div`
    height: 80px;
`;


function SmallHome(data) {

    console.log('small home');

    return(
        <Partial>
            <PartialCol>
                <Section>
                    <FlexRow>
                        {/* TODO: use an image to substitute this ">" */}
                        <BigText>> caio gomes</BigText>
                    </FlexRow>
                    <FlexRow>
                        <div>
                            <CustomImg fixed={data.file.childImageSharp.fixed}></CustomImg>
                        </div>
                        <AlignRight>
                            <h2>
                                inovando em<br/>
                                {/* in 414px remove the break */}
                                <GreenText>apps</GreenText> <OrangeText>&</OrangeText> 
                                { window.innerWidth < 470 ? <br/> : null }
                                <GreenText> produtos</GreenText> 
                                { window.innerWidth < 414 ? <br/> : null } 
                                <GreenText> digitais</GreenText>
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
            </PartialCol>
        </Partial>
    );
}

function BigHome(data) {

    console.log('big home');

    return(
        <Partial>
            <PartialCol>
                <Section>
                    <FlexRow>
                        {/* TODO: use an image to substitute this ">" */}
                        <BigText>> caio gomes</BigText>
                    </FlexRow>
                    <FlexRow>
                        <h2>
                            <GreenText>apps</GreenText> 
                            <OrangeText> & </OrangeText>
                            <GreenText>produtos digitais</GreenText>
                        </h2>
                    </FlexRow>
                    <FlexRow>
                        <h3>eu transformo ideias em produtos digitais de alta qualidade</h3>
                    </FlexRow>
                    <FlexRow>
                        <CommonLink href="#"><h3>conheça meu trabalho</h3></CommonLink>
                    </FlexRow>
                    <FlexRow>
                        <IconButton>
                            <Img fixed={data.github.childImageSharp.fixed}></Img>
                        </IconButton>
                        <IconButton>
                            <Img fixed={data.instagram.childImageSharp.fixed}></Img>
                        </IconButton>
                        <IconButton>
                            <Img fixed={data.medium.childImageSharp.fixed}></Img>
                        </IconButton>
                        <IconButton>
                            <Img fixed={data.twitter.childImageSharp.fixed}></Img>
                        </IconButton>
                        <IconButton>
                            <Img fixed={data.gmail.childImageSharp.fixed}></Img>
                        </IconButton>
                    </FlexRow>
                    <FlexRow>
                        <Spacer></Spacer>
                    </FlexRow>
                    <FlexRow>
                        <PrimaryButton href='#'>encomende agora seu app</PrimaryButton>
                    </FlexRow>
                </Section>
            </PartialCol>
            <PartialCol>
                <LimitContainer>
                    <ImgContainer>
                        <CustomImg fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1 }}></CustomImg>
                    </ImgContainer>
                </LimitContainer>
            </PartialCol>
        </Partial>
    );
}

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
                    fluid(maxHeight: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                }
            }
            instagram: file(relativePath: { eq: "icons/instagram-sketched.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            medium: file(relativePath: { eq: "icons/medium.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            twitter: file(relativePath: { eq: "icons/twitter.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            github: file(relativePath: { eq: "icons/github-image.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            gmail: file(relativePath: { eq: "icons/gmail.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    console.log(window.innerWidth);
    console.log(limitSize);

    return(
        <>
        {window.innerWidth > limitSize ? BigHome(data) : SmallHome(data)}
        </>
    );
}


export default Home;