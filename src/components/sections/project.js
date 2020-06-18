import React from 'react';
import styled from 'styled-components';
import Section from './section';
import theme from '../../theme';
import '../../styles/picturepan2/devices.min.css';
import '../../styles/responsive-device.css';
import { SecondaryButton, PrimaryButton } from '../common/buttons/buttons';
import withSizes from 'react-sizes';
import { MobileOnlyDiv, DesktopOnlyDiv } from '../common/containers/MobileRender';

const ContentDiv = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;

  p {
    font-size: 18px;
  }
`;

const PhoneDiv = styled.div`
  /* max-height: 200px; */
  height: 415px;
  padding: 0px calc(50% - 98.44px);
`;
const ButtonDiv = styled.div`
  z-index: 20;
  margin: 0px auto;

  @media (max-width: ${theme.limitSize}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FlexContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 18px;
  }
`;

const Partial = styled.div`
  display: flex;
  flex-direction: ${props => props.direction === 'reverse' ? 'row-reverse' : 'row'};
  @media (max-width: ${theme.limitSize}px) {
    flex-direction: column;
  }
`;

const PartialCol = styled.div`
  width: 100%;
  overflow: hidden;
  a {
    margin-top: 50px;
  }
`;

const Title = styled.div`
  font-size: 36px;
  @media (max-width: ${theme.limitSize}px) {
    text-align: left;
    width: 100%;
  }
`;

const Description = styled.p`
  margin-bottom: 50px;
`;

const ReduceAMargin = styled.div`
  a {
    margin: 10px 0px 0px 0px;
  }
`;

const Spacer = styled.div`
  height: 20px;
`;

function Project(props) {
  return(
  <Partial direction={props.direction} id={props.id}>
    <PartialCol>
      <Section>
        <MobileOnlyDiv>
          <FlexContent>
            <Title>{props.title}</Title>
            <Spacer />
          </FlexContent>
        </MobileOnlyDiv>
        <ContentDiv>
          <PhoneDiv>
            <div className="device device-iphone-8">
              <div className="device-frame">
                {props.children}
              </div>
              <div className="device-stripe"></div>
              <div className="device-header"></div>
              <div className="device-sensors"></div>
              <div className="device-btns"></div>
              <div className="device-power"></div>
            </div>
          </PhoneDiv>
          <MobileOnlyDiv>
            <ButtonDiv>
              <SecondaryButton href={props.link} target='_blank' width='300px'>acesse agora o aplicativo</SecondaryButton>
            </ButtonDiv>
          </MobileOnlyDiv>
        </ContentDiv>
      </Section>
    </PartialCol>
    <PartialCol>
      <Section>
        <FlexContent>
          <DesktopOnlyDiv>
            <Title>{props.title}</Title>
          </DesktopOnlyDiv>
          <Description>{props.description}</Description>
          <DesktopOnlyDiv>
            <ButtonDiv>
              <SecondaryButton href={props.link} target='_blank' width='300px'>acesse agora o aplicativo</SecondaryButton>
            </ButtonDiv>
            <ReduceAMargin>
              <PrimaryButton href='https://forms.gle/pXbtucfzxaQhSQV26'>
                {props.ctaTitle}
              </PrimaryButton>
            </ReduceAMargin>
          </DesktopOnlyDiv>
        </FlexContent>
      </Section>
    </PartialCol>
  </Partial>
  );
}

const mapSizesToProps = sizes => ({
  isSmall: sizes.width && sizes.width < theme.limitSize
})

export default withSizes(mapSizesToProps)(Project);