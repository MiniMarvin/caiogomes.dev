import React from 'react';
import styled from 'styled-components';
import Section from './section';
import '../../styles/responsive-device.css';
import { PrimaryButton } from '../common/buttons/buttons';

const ContentDiv = styled.div`
    margin: 0px auto;
    display: flex;
    flex-direction: column;
`;

const PhoneDiv = styled.div`
    /* max-height: 200px; */
    height: 415px;
`;
const Spacer = styled.div`
    height: 50px;
`;

const AppArea = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 40px;
    padding: 40px 10px 0px;
`;

function Showcase() {
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

export default Showcase;