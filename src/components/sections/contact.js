import React from 'react';
import styled from 'styled-components';
import Section from './section';
import {IconButton} from '../common/buttons/buttons';
import CommonLink from '../common/links/common-link';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const Title = styled.div`
    font-size: 36px;
`;

const Text = styled.p`
    font-size: 18px;
    margin-bottom: 40px;
`;

function Contact() {
    const data = useStaticQuery(graphql`
        query {
            instagram: file(relativePath: { eq: "icons/instagram-sketched.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            medium: file(relativePath: { eq: "icons/medium.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            twitter: file(relativePath: { eq: "icons/twitter.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            github: file(relativePath: { eq: "icons/github-image.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            gmail: file(relativePath: { eq: "icons/gmail.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <Section>
            <Title>contato</Title>
            <Text>além disso estou sempre ativo nas redes sociais, então se quiser acompanhar a produção de apps, saber sobre novidades de tecnologia ou ver ideias incríveis, estou disponíveis através de <br/><CommonLink href='mailto:contato@caiogomes.dev?subject=Olá! Estou entrando em contato pois vi seu site e fiquei interessado em ter um diálogo mais próximo'>contato@caiogomes.dev</CommonLink> ou</Text>
            {/* Inserir aqui os icones para contato */}
            <div>
                <IconButton>
                    <Img fixed={data.github.childImageSharp.fixed}></Img>
                </IconButton>
                <IconButton>
                    <Img fixed={data.instagram.childImageSharp.fixed}></Img>
                </IconButton>
                <IconButton>
                    <Img fixed={data.medium.childImageSharp.fixed}></Img>
                </IconButton>
                <IconButton>
                    <Img fixed={data.twitter.childImageSharp.fixed}></Img>
                </IconButton>
                <IconButton>
                    <Img fixed={data.gmail.childImageSharp.fixed}></Img>
                </IconButton>
            </div>
        </Section>
    );
}

export default Contact;