import React, { useState } from 'react';
import styled from 'styled-components';
import Section from './section';
import CustomInput from '../common/inputs/custom-input';
import {PrimaryButton} from '../common/buttons/buttons';
import CommonLink from '../common/links/common-link';
import theme from '../../theme';
import { graphql, useStaticQuery } from "gatsby";

const Title = styled.div`
    font-size: 36px;
`;
const Text = styled.p`
    font-size: 18px;
    margin-bottom: 40px;
`;

const Partial = styled.div`
    display: flex;
    flex-direction: row;
`;

const PartialCol = styled.div`
    width: 100%;
    overflow: hidden;
`;


function SmallScreen() {
    return (
        <Section>
            <Title>blog</Title>
            <Text>estou sempre escrevendo sobre assuntos interessantes relacionados a tecnologia, produto e inovação, então se você quer saber mais sobre isso <CommonLink href='#'>acesse agora o blog</CommonLink> e se quiser ser notificado sobre novidades nessa área assine a newsletter abaixo</Text>
            <CustomInput placeholder='digite seu email...' />
            <PrimaryButton href='#'>assinar newsletter</PrimaryButton>
        </Section>
    );
}

function BigScreen(data) {

    const imagePath = (width, height, id) => `https://cdn-images-1.medium.com/fit/${width}/${height}/${id}`;
    
    return (
        <Partial>
            <PartialCol>
                <Section>
                    <Title>blog</Title>
                    <Text>estou sempre escrevendo sobre assuntos interessantes relacionados a tecnologia, produto e inovação, então se você quer saber mais sobre isso <CommonLink href='#'>acesse agora o blog</CommonLink> e se quiser ser notificado sobre novidades nessa área assine a newsletter abaixo</Text>
                    <Partial>
                        <CustomInput placeholder='digite seu email...' />
                        <PrimaryButton href='#'>assinar newsletter</PrimaryButton>
                    </Partial>
                </Section>
            </PartialCol>
            <PartialCol>
                <Section>
                    {data.allMediumPost.edges.map((edge, id) => 
                        <div key={id}>
                            <p>{edge.node.title}</p>
                            <p>{edge.node.virtuals.previewImage.imageId}</p>
                        </div>)}
                </Section>
            </PartialCol>
        </Partial>
    );
}


function Blog() {
    const data = useStaticQuery(graphql`
        query {
            allMediumPost(sort: { fields: [createdAt], order: DESC }) {
                edges {
                    node {
                        id
                        title
                        virtuals {
                            subtitle
                            previewImage {
                                imageId
                            }
                        }
                        author {
                            name
                        }
                    }
                }
            }
        }
    `);

    // force a rerender
    console.log(data);
    console.log(data.allMediumPost);

    return (
        <>
            {window.innerWidth < theme.limitSize ? SmallScreen() : BigScreen(data)}
        </>
    );
}

export default Blog;