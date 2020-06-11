import React from 'react';
import styled from 'styled-components';
import Section from './section';
import theme from '../../theme';
import '../../styles/picturepan2/devices.min.css';
import '../../styles/responsive-device.css';
import { SecondaryButton, PrimaryButton } from '../common/buttons/buttons';

const limitSize = 600;

const ContentDiv = styled.div`
    margin: 0px auto;
    display: flex;
    flex-direction: column;
`;

const PhoneDiv = styled.div`
    /* max-height: 200px; */
    height: 415px;
`;
const ButtonDiv = styled.div`
    z-index: 20;
    margin: 0px auto;
`;

const FlexContent = styled.div`
    display: flex;
    flex-direction: column;
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

function smallScreen(props) {
    return(
        <div>
            <Section>
                <ContentDiv>
                    <PhoneDiv>
                        <div className="device device-iphone-x">
                            <div className="device-frame">
                                <img className="device-content" src="https://www.google.com/sky/about_files/messier82.jpg" />
                            </div>
                            <div className="device-stripe"></div>
                            <div className="device-header"></div>
                            <div className="device-sensors"></div>
                            <div className="device-btns"></div>
                            <div className="device-power"></div>
                        </div>
                    </PhoneDiv>
                    <ButtonDiv>
                        <SecondaryButton href='#' width='200px'>acesse agora o aplicativo</SecondaryButton>
                    </ButtonDiv>
                    <div></div>
                </ContentDiv>
            </Section>
            <Section>
                <FlexContent>
                    <p>
                    mostra minhas habilidades de criar interfaces bonitas e simples com utilidade e o uso de serviços e apis para garantir a sincronização do serviço com diversas plataformas, de sites até aplicativos, além de websockets e outras features importantes, e aproxima de saúde
                    </p>
                    <PrimaryButton href='#'>
                        encomende um app agora
                    </PrimaryButton>
                </FlexContent>
            </Section>
        </div>
    );
}

function bigScreen(props) {
    return(
        <Partial direction={props.direction}>
            <PartialCol>
                <Section>
                    <ContentDiv>
                        <PhoneDiv>
                            <div className="device device-iphone-x">
                                <div className="device-frame">
                                    <img className="device-content" src="https://www.google.com/sky/about_files/messier82.jpg" />
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
                        <p>
                        mostra minhas habilidades de criar interfaces bonitas e simples com utilidade e o uso de serviços e apis para garantir a sincronização do serviço com diversas plataformas, de sites até aplicativos, além de websockets e outras features importantes, e aproxima de saúde
                        </p>
                        <PrimaryButton href='#'>
                            encomende um app agora
                        </PrimaryButton>
                    </FlexContent>
                </Section>
            </PartialCol>
        </Partial>
    );
}


function Project(props) {
    return(
        <>
            {window.innerWidth < theme.limitSize ? smallScreen(props) : bigScreen(props)}
        </>
    );
}

export default Project
;