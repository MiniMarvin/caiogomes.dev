import React from 'react';
import styled from 'styled-components';
import Section from './section';
// import '../../styles/responsive-device.css';
import { PrimaryButton } from '../common/buttons/buttons';
import theme from '../../theme';
import AppCard from '../common/containers/AppCard';
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import withSizes from 'react-sizes';

const ContentDiv = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;

const PhoneDiv = styled.div`
  /* max-height: 200px; */
  height: 415px;

  padding: 0px calc(50% - 98.44px);
`;

const Spacer = styled.div`
  height: 50px;
`;

const ShowcaseSection = styled.div`
  overflow: hidden;
  width: auto;
  max-width: 100vw;
  max-height: 1000px;
  height: 750px;
  padding: 30px calc(50vw - 171.2px) 0px;

  .device {
    /* width: 428; height: 868 */
    position: absolute;
    transform: scale(0.8);
    transform-origin: calc(50% - 214px) 0%;
    z-index: 1;  
  }
`;

const AppArea = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 40px;
  padding: 40px 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span, p, h1, h2, h3, h4, h5, h6, b {
    color: black;
  }
`;


const StyledBackgroundSection = styled(BackgroundImage)`
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  /* background-size: cover; */
  background-color: transparent;
`

function smallScreen(apps, img) {
  return (
    <StyledBackgroundSection
      Tag="section"
      // className={className}
      fluid={img}
    >
      <Section>
        <ContentDiv>
          <PhoneDiv>
            <div className="device device-iphone-x">
              <div className="device-frame">
                <AppArea>
                  <div>
                    <h1>Outros apps</h1>
                    {
                      apps.map((app, key) => (
                        <AppCard
                          key={key}
                          title={app.title}
                          description={app.description}
                          link={app.link}
                          img={app.img}
                        />
                      ))
                    }
                  </div>
                  <div>
                    {/* <PrimaryButton>
                      ver todos os apps
                    </PrimaryButton> */}
                    <Spacer/>
                  </div>
                </AppArea>
              </div>
              <div className="device-stripe"></div>
              <div className="device-header"></div>
              <div className="device-sensors"></div>
              <div className="device-btns"></div>
              <div className="device-power"></div>
            </div>
          </PhoneDiv>
        </ContentDiv>
      </Section>
    </StyledBackgroundSection>
  );
}


function bigScreen(apps, img) {
  return (
    <StyledBackgroundSection
      Tag="section"
      // className={className}
      fluid={img}
      backgroundColor={`#040e18`}
    >
      <ShowcaseSection>
        <ContentDiv>
          <div className="device device-iphone-x">
            <div className="device-frame">
              <AppArea>
                <div>
                  <h1>Outros apps</h1>
                  {
                    apps.map((app, key) => (
                      <AppCard
                        key={key}
                        title={app.title}
                        description={app.description}
                        link={app.link}
                        img={app.img}
                      />
                    ))
                  }
                </div>
                <div>
                  {/* <PrimaryButton>
                    ver todos os apps
                  </PrimaryButton> */}
                  <Spacer/>
                </div>
              </AppArea>
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
          </div>
        </ContentDiv>
      </ShowcaseSection>
    </StyledBackgroundSection>
  );
}



function Showcase(props) {
  const data = useStaticQuery(graphql`
    query {
      diarioAlimentar: file(relativePath: { eq: "apps/diario-alimentar.jpg" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cronometroEnem: file(relativePath: { eq: "apps/cronometro-enem.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      moodlyMusic: file(relativePath: { eq: "apps/moodly-music.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      totemClub: file(relativePath: { eq: "apps/totem-club.jpg" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bgImg: file(relativePath: { eq: "bg-showcase.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  let apps = [
    {
      title: 'diario alimentar',
      description: 'acompanhe a qualidade das suas refeições',
      img: data.diarioAlimentar ? data.diarioAlimentar.childImageSharp.fixed : null,
      link: 'https://apps.apple.com/br/app/di%C3%A1rio-alimentar/id1481634400'
    },
    {
      title: 'cronometro enem',
      description: 'simulação do cronometro da prova do enem',
      img: data.cronometroEnem ? data.cronometroEnem.childImageSharp.fixed : null,
      link: 'https://apps.apple.com/us/app/id1478941061'
    },
    {
      title: 'moodly music',
      description: 'músicas escolhidas a partir de seus batimentos cardíacos',
      img: data.moodlyMusic ? data.moodlyMusic.childImageSharp.fixed : null,
      link: 'http://bit.ly/moodlyapp'
    },
    {
      title: 'totem club',
      description: 'histórias imersivas com animações e músicas',
      img: data.totemClub ? data.totemClub.childImageSharp.fixed : null,
      link: 'https://apps.apple.com/br/app/totem-clube/id1463216926'
    },
  ];
  const img = data.bgImg.childImageSharp.fluid;

  let renderSmall = props.isSmall;

  return (
    <>{renderSmall ? smallScreen(apps, img) : bigScreen(apps, img)}</>
  );
}
const mapSizesToProps = sizes => ({
  isSmall: sizes.width && sizes.width < theme.limitSize
});

export default withSizes(mapSizesToProps)(Showcase);