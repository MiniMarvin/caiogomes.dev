import React from 'react';
import styled from 'styled-components';
import Section from './section';
import theme from '../../theme';
import '../../styles/picturepan2/devices.min.css';
import '../../styles/responsive-device.css';
import { SecondaryButton, PrimaryButton } from '../common/buttons/buttons';
import withSizes from 'react-sizes';

const limitSize = 600;

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
`;

const Description = styled.p`
    margin-bottom: 50px;
`;

const ReduceAMargin = styled.div`
    a {
        margin: 10px 0px 0px 0px;
    }
`

function smallScreen(props) {
    return(
        <div>
            <Section>
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
                    <ButtonDiv>
                        <SecondaryButton href={props.link} target='_blank' width='300px'>acesse agora o aplicativo</SecondaryButton>
                    </ButtonDiv>
                    <div></div>
                </ContentDiv>
            </Section>
            <Section>
                <FlexContent>
                    <Title>{props.title}</Title>
                    <Description>{props.description}</Description>
                    <PrimaryButton href='https://forms.gle/pXbtucfzxaQhSQV26'>
                        {props.ctaTitle}
                    </PrimaryButton>
                </FlexContent>
            </Section>
        </div>
    );
}

function bigScreen(props) {
    return(
        <Partial direction={props.direction} id={props.id}>
            <PartialCol>
                <Section>
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
                        <div></div>
                    </ContentDiv>
                </Section>
            </PartialCol>
            <PartialCol>
                <Section>
                    <FlexContent>
                        <Title>{props.title}</Title>
                        <Description>{props.description}</Description>
                        <ButtonDiv>
                            <SecondaryButton href={props.link} target='_blank' width='300px'>acesse agora o aplicativo</SecondaryButton>
                        </ButtonDiv>
                        <ReduceAMargin>
                            <PrimaryButton href='https://forms.gle/pXbtucfzxaQhSQV26'>
                                {props.ctaTitle}
                            </PrimaryButton>
                        </ReduceAMargin>
                    </FlexContent>
                </Section>
            </PartialCol>
        </Partial>
    );
}


function Project(props) {

    let renderSmall = props.isSmall;

    return(
        <>{renderSmall ? smallScreen(props) : bigScreen(props)}</>
    );
}

const mapSizesToProps = sizes => ({
  isSmall: sizes.width && sizes.width < theme.limitSize
})

export default withSizes(mapSizesToProps)(Project);