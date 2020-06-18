import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import {PrimaryButton, SecondaryButton, IconButton} from '../common/buttons/buttons';
import Section from './section';
import CommonLink from '../common/links/common-link';
import SocialMedia from '../common/links/SocialMedia';
import withSizes from 'react-sizes';
import {MobileOnlySpan, DesktopOnlySpan, MobileOnlyDiv, DesktopOnlyDiv} from '../common/containers/MobileRender';

// TODO: make the underscore border-radius round

const BigText = styled.h1`
  /* font-size: 48px; */
  font-size: 15vw;
  padding: 0px;
  margin: 0px;
  display: inline;

  span {
    text-decoration: underline solid #FD8A07;
    border-radius: 10px;
  }

  @media (min-width: 414px) {
    font-size: 14.5vw;
  }

  @media (min-width: ${theme.limitSize}px) {
    /* TODO: fine tune those sizes */
    font-size: 6.5vw;
    margin-top: 50px;
  }

  @media (min-width: ${theme.limitSize*1.5}px) {
    /* TODO: change the size for multiple images */
    font-size: 72px;
    margin-top: 50px;
  }
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

  @media (min-width: ${theme.limitSize}px) {
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

const SpecialPartialCol = styled.div`
  width: 100%;
  overflow: hidden;

  @media (max-width: ${theme.limitSize}px) {
  display: none;
  }
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

const Break470 = styled.br`
  @media(max-width: 470) {
    display: none;
  }
`
const Break414 = styled.br`
  @media(max-width: 414) {
    display: none;
  }
`

function Home(props) {
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
            # ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      arrow: file(relativePath: { eq: "icons/arrow.png" }) {
        childImageSharp {
          fluid(quality: 10) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return(
    <Partial>
      <PartialCol>
        <Section>
          <FlexRow>
            <BigText>
              <DesktopOnlySpan>
                <Img style={{
                  width: '0.35em',
                  display: "inline-block",
                  marginRight: '10px',
                  marginLeft: '-0.5em',
                  marginBottom: '-3px'
                }}
                // sizes={data.arrow.childImageSharp.sizes} 
                fluid={data.arrow.childImageSharp.fluid} 
                />
              </DesktopOnlySpan>
              <span>c</span>aio gomes
            </BigText>
          </FlexRow>
          <MobileOnlyDiv>
            <FlexRow>
              <div>
                <CustomImg fixed={data.file.childImageSharp.fixed}></CustomImg>
              </div>
              <AlignRight>
                <h2>
                  inovando em<br/>
                  {/* in 414px remove the break */}
                  <GreenText>apps</GreenText>
                  <OrangeText>&</OrangeText> 
                  <Break470 />
                  <GreenText> produtos</GreenText> 
                  <Break414 />
                  <GreenText> digitais</GreenText>
                </h2>
              </AlignRight>
            </FlexRow>
          </MobileOnlyDiv>
          <DesktopOnlyDiv>
            <FlexRow>
              <h2>
                <GreenText>apps</GreenText> 
                <OrangeText> & </OrangeText>
                <GreenText>produtos digitais</GreenText>
              </h2>
            </FlexRow>
          </DesktopOnlyDiv>
          <FlexRow>
            <h3>eu transformo ideias em produtos digitais de alta qualidade</h3>
          </FlexRow>
          <DesktopOnlyDiv>
            <FlexRow>
              <CommonLink href="#project-1"><h3>conheça meu trabalho</h3></CommonLink>
            </FlexRow>
          </DesktopOnlyDiv>
          <MobileOnlyDiv>
            <FlexRow>
              <SecondaryButton href='#project-1'>conheça meu trabalho</SecondaryButton>
            </FlexRow>
          </MobileOnlyDiv>
          <DesktopOnlyDiv>
            <FlexRow>
              <SocialMedia medium={false} instagram={false} twitter={false} />
            </FlexRow>
            <FlexRow>
              <Spacer></Spacer>
            </FlexRow>
          </DesktopOnlyDiv>
          <FlexRow>
            <PrimaryButton href='https://forms.gle/tbxkMMfESAAv2iRK9'>encomende agora seu app</PrimaryButton>
          </FlexRow>
        </Section>
      </PartialCol>
      <SpecialPartialCol>
        <LimitContainer>
          <ImgContainer>
            <CustomImg fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1 }}></CustomImg>
          </ImgContainer>
        </LimitContainer>
      </SpecialPartialCol>
    </Partial>
  );
}

const mapSizesToProps = sizes => ({
  isSmall: sizes.width && sizes.width < theme.limitSize,
  break1: sizes.width && sizes.width < 470,
  break2: sizes.width && sizes.width < 414,
});

export default withSizes(mapSizesToProps)(Home);