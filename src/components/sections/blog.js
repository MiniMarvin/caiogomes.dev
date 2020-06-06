import React from 'react';
import styled from 'styled-components';
import Section from './section';
import CustomInput from '../common/inputs/custom-input';
import {PrimaryButton} from '../common/buttons/buttons';
import CommonLink from '../common/links/common-link';

const Title = styled.div`
    font-size: 36px;
`;
const Text = styled.p`
    font-size: 18px;
    margin-bottom: 40px;
`;

function Blog() {
    return (
        <Section>
            <Title>blog</Title>
            <Text>estou sempre escrevendo sobre assuntos interessantes relacionados a tecnologia, produto e inovação, então se você quer saber mais sobre isso <CommonLink href='#'>acesse agora o blog</CommonLink> e se quiser ser notificado sobre novidades nessa área assine a newsletter abaixo</Text>
            <CustomInput placeholder='digite seu email...' />
            <PrimaryButton href='#'>assinar newsletter</PrimaryButton>
        </Section>
    );
}

export default Blog;