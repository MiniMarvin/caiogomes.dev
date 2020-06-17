import React from 'react';
import styled from 'styled-components';
import Section from './section';
import {IconButton} from '../common/buttons/buttons';
import CommonLink from '../common/links/common-link';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import theme from '../../theme';
import SocialMedia from '../common/links/SocialMedia';

const Title = styled.div`
    font-size: 36px;
`;

const Text = styled.span`
    font-size: 18px;
    margin-bottom: 40px;
`;

const Spacer = styled.span`
    width: 30px;
`;

const Inline = styled.div`
    display: inline;
`;

function smallScreen(data) {
    return (
        <Section>
            <Title>contato</Title>
            <Text>além disso estou sempre ativo nas redes sociais, então se quiser 
                acompanhar a produção de apps, saber sobre novidades de tecnologia 
                ou ver ideias incríveis, estou disponíveis através de 
                <br/>
                {/* {window.innerWidth < } */}
                <CommonLink href='mailto:contato@caiogomes.dev?subject=Olá! 
                    Estou entrando em contato pois vi seu site e fiquei interessado 
                    em ter um diálogo mais próximo'>
                        contato@caiogomes.dev
                </CommonLink> ou</Text>
            <br/>
            <br/>
            <SocialMedia />
        </Section>
    );
}

function bigScreen(data) {
    return (
        <Section>
            <Title>contato</Title>
            <Text>além disso estou sempre ativo nas redes sociais, então se quiser 
                acompanhar a produção de apps, saber sobre novidades de tecnologia 
                ou ver ideias incríveis, estou disponíveis através de 
                <br/>
                <br/>
                {/* {window.innerWidth < } */}
                <CommonLink href='mailto:contato@caiogomes.dev?subject=Olá! 
                    Estou entrando em contato pois vi seu site e fiquei interessado 
                    em ter um diálogo mais próximo'>
                        contato@caiogomes.dev
                </CommonLink> ou
            </Text> 
            <Spacer></Spacer>
            <SocialMedia />
        </Section>
    );
}

function Contact() {
    return (
    <>{window.innerWidth < theme.limitSize ? smallScreen() : bigScreen() }</>
    );
}

export default Contact;