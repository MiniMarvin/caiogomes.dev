import React from 'react';
import styled from 'styled-components';
import Section from './section';
import '../../styles/picturepan2/devices.min.css';
import '../../styles/responsive-device.css';
import { SecondaryButton, PrimaryButton } from '../common/buttons/buttons';

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

const clearFix = styled.div`
    height: 20px;
`;

const FlexContent = styled.div`
    display: flex;
    flex-direction: column;
`;


function Project(props) {
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

export default Project
;