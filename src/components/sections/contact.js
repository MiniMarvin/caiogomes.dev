import React from 'react';
import styled from 'styled-components';
import Section from './section';
import {IconButton} from '../common/buttons/buttons';
import CommonLink from '../common/links/common-link';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import theme from '../../theme';
import SocialMedia from '../common/links/SocialMedia';
import withSizes from 'react-sizes';
import {MobileOnlySpan, DesktopOnlySpan, MobileOnlyDiv, DesktopOnlyDiv} from '../common/containers/MobileRender';

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

function Contact(props) {
  return (
    <Section>
        <Title>contato</Title>
        <Text>além disso estou sempre ativo nas redes sociais, então se quiser 
            acompanhar a produção de apps, saber sobre novidades de tecnologia 
            ou ver ideias incríveis, estou disponíveis através de 
            <DesktopOnlySpan>
            <br/>
            </DesktopOnlySpan>
            <br/>
            <CommonLink href='https://mail.google.com/mail/?view=cm&fs=1&to=contato@caiogomes.dev&su=Gostaria%20de%20conversar%20com%20você'>
              contato@caiogomes.dev
            </CommonLink> ou</Text> 
        <DesktopOnlySpan>
          <Spacer />
        </DesktopOnlySpan>
        <MobileOnlySpan>
          <br/><br/>
        </MobileOnlySpan>
        <SocialMedia />
    </Section>
  );
}

const mapSizesToProps = sizes => ({
  isSmall: sizes.width && sizes.width < theme.limitSize
});

export default withSizes(mapSizesToProps)(Contact);