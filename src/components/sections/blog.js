import React, { useState } from 'react';
import styled from 'styled-components';
import Section from './section';
import CustomInput from '../common/inputs/custom-input';
import {PrimaryButton} from '../common/buttons/buttons';
import CommonLink from '../common/links/common-link';
import theme from '../../theme';
import { graphql, useStaticQuery } from "gatsby";
import MediumPost from '../common/containers/MediumPost';

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

const InputZone = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    margin-top: 50px;
    /* margin-bottom: 0px; */
`;

const Container1 = styled.div`
    flex-grow: 2;
    margin-right: 15px;
`;

const Container2 = styled.div`
    flex-grow: 1;
`;

const BlogPost = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
    const randomItem = (items) => items[Math.floor(Math.random() * (items.length))];
    const forbiddenCharacters = /[^a-zA-Z 0-9.,!@#$%^&*`~+=çãáàâéêèíìóòõúù]/g;
    const parseTitle = title => title.replace(forbiddenCharacters, '').toLowerCase().split(/[\s.,]/g).join('-');
    const mediumUrl = (username, title, postid) => `https://medium.com/@${username}/${parseTitle(title)}-${postid}`;

    return (
        <Partial>
            <PartialCol>
                <Section>
                    <Title>blog</Title>
                    <Text>estou sempre escrevendo sobre assuntos interessantes relacionados a tecnologia, produto e inovação, então se você quer saber mais sobre isso <CommonLink href='#'>acesse agora o blog</CommonLink> e se quiser ser notificado sobre novidades nessa área assine a newsletter abaixo</Text>
                    <InputZone>
                        <Container1>
                            <CustomInput placeholder='digite seu email...' />
                        </Container1>
                        <Container2>
                            <PrimaryButton href='#'>assinar</PrimaryButton>
                        </Container2>
                    </InputZone>
                </Section>
            </PartialCol>
            <PartialCol>
                <Section>
                    <BlogPost>
                        {data.allMediumPost.edges.length === 0 ? null:
                            (node => 
                                <MediumPost 
                                    title={node.title} 
                                    description={node.virtuals.subtitle}
                                    // TODO: make the image size be different
                                    img={imagePath(240, 180, node.virtuals.previewImage.imageId)}
                                    username={node.author.name}
                                    date={node.latestPublishedAt}
                                    href={mediumUrl(node.author.username, node.title, node.medium_id)}
                                ></MediumPost>)(randomItem(data.allMediumPost.edges).node)
                        }
                    </BlogPost>
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
                        latestPublishedAt
                        author {
                            name
                            imageId
                            username
                        }
                        medium_id
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