import React from 'react';
import styled from 'styled-components';
import Section from './section';
// import '../../styles/responsive-device.css';
import { PrimaryButton } from '../common/buttons/buttons';
import theme from '../../theme';

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
`;

function smallScreen() {
    return (
        <Section>
            <ContentDiv>
                <PhoneDiv>
                    <div className="device device-iphone-x">
                        <div className="device-frame">
                            {/* <img className="device-content" src="https://www.google.com/sky/about_files/messier82.jpg" /> */}
                            <AppArea>
                                {/* <Spacer></Spacer> */}
                                <PrimaryButton>
                                    adicione seu app favorito
                                </PrimaryButton>
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
    );
}


function bigScreen() {
    return (
        <ShowcaseSection>
            <ContentDiv>
                <div className="device device-iphone-x">
                    <div className="device-frame">
                        {/* <img className="device-content" src="https://www.google.com/sky/about_files/messier82.jpg" /> */}
                        <AppArea>
                            {/* <Spacer></Spacer> */}
                            <PrimaryButton>
                                adicione seu app favorito
                            </PrimaryButton>
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
    );
}



function Showcase() {
    return (
        <>
            {window.innerWidth < theme.limitSize ? smallScreen() : bigScreen()}
        </>
    );
}

export default Showcase;