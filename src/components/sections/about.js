import React from 'react';
import styled from 'styled-components';
import Section from './section';
import {PrimaryButton} from '../common/buttons/buttons';
import theme from  '../../theme';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import withSizes from 'react-sizes';

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
  flex-direction: column;
  
  @media (min-width: ${theme.limitSize}px){
    p, h1, h2,h3,h4,h5,h6,span, div {
      margin-left: 50px;
    }
  }
  
`;

const SpecialPartialCol = styled.div`
  width: 100%;
  overflow: hidden;

  @media (max-width: ${theme.limitSize}px) {
  display: none;
  }
`;

const CustomImg = styled(Img)`
  border-radius: 0px 186px 186px 186px;
  border: none;
  object-fit: cover;
  overflow: hidden;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  @media (min-width:${theme.limitSize}px) {
    h1,h2,h3,h4,h5,h6,p,span {
      margin: 0px;
      padding: 0px;
    }
  }
  
`;

const aboutTitle = 'Quem é caio?';

const aboutText = 'Olá! Bem, como você já sabe, crio produtos digitais em recife para resolver um problema específico, \
meu processo é de entender os problemas do negócio e conceber um app que que cause \
impacto. comecei a desenvolver software aos 12 anos e já ganhei algumas competições \
internacionais como scholarship na WWDC da Apple (2018 & 2019) e a ESDC da Intel (2018). \
Além disso gosto muito de música e sou um grande intusiasta de saúde digital, se quiser \
trabalhar comigo basta entrar em contato.';

function About(props) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me-tech 1.png" }) {
        childImageSharp {
          fixed(width: 376, height: 587) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Section>
      <Partial>
        <SpecialPartialCol>
          <CustomImg fixed={data.file.childImageSharp.fixed}></CustomImg>
        </SpecialPartialCol>
        <PartialCol>
          <Title>{aboutTitle}</Title>
          <Text>
            {aboutText}
          </Text>
          {/* <PrimaryButton href='#'>assinar newsletter</PrimaryButton> */}
        </PartialCol>
      </Partial>
    </Section>
  );
}

const mapSizesToProps = sizes => ({
  isSmall: sizes.width && sizes.width < theme.limitSize
})

export default withSizes(mapSizesToProps)(About);