import React from 'react';
import Section from './section';
import styled from 'styled-components';
import { PrimaryButton } from '../common/buttons/buttons';

const FlexContent = styled.div`
    display: flex;
    flex-direction: column;
`;


function ProjectDescription() {
    return (
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
    );
}

export default ProjectDescription;