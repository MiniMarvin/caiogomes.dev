import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from '../components/sections/home';
import Project from '../components/sections/project';
import ProjectDescription from '../components/sections/project-description';
import styled from 'styled-components';
import Showcase from '../components/sections/showcase';
import Blog from '../components/sections/blog';
import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import ColorMatcher from  '../images/color-matcher.mp4';
import Remedioz from  '../images/remedioz.mp4';

const Spacer = styled.section`
    height: 50px;
`;

const Video = styled.video`
  max-width: 100%;
`;

const IndexPage = () => {

  const isAndroid = navigator.userAgent.toLowerCase().includes('android');
  const remediozAndroid = 'https://play.google.com/store/apps/details?id=com.zurpei.medication_manager_app&hl=de';
  const remediozIos = 'https://apps.apple.com/br/app/remedioz/id1499649906';

  return (
    <Layout>
      <SEO title="caio gomes" />
      <Home></Home>
      <Spacer></Spacer>
      <Project title='Remedioz'
        description='Esse app surgiu quando tive de seguir um tratamento médico.
        Vi que é complicado gerenciar vários medicamentos por dia e construí esse produto.
        O aplicativo foi desenvolvido em Flutter e está disponível para Android e iOS. Foi 
        desenvolvido em cerca de quatro semanas, sendo a primeira semana realizando 
        entrevistas com outras pessoas que tomavam remédios, uma semana montando a 
        identidade visual e duas semanas desenvolvendo.'
        link={isAndroid ? remediozAndroid : remediozIos }
        ctaTitle='trabalhe comigo'
        id='project-1'
      >
        <Video autoPlay muted loop id="remedioz">
          <source src={Remedioz} type="video/mp4" />
          Your browser does not support HTML5 video.
        </Video>
      </Project>
      <Spacer></Spacer>
      <Project title='Color Matcher' direction='reverse'
        description='Esse é um jogo desenvolvido de forma nativa utilizando Swift e SpriteKit
        devido a uma ideia que tive de jogo que pudesse ser casual e dinâmico pois não encontrei
        nenhum jogo na loja que atendesse a essa vontade que estava na época. O desenvolvimento
        durou 3 semanas aproximadamente, uma para o design e duas para o desenvolvimento do jogo.'
        link='https://apps.apple.com/br/app/color-matcher-game/id1439815926'
        ctaTitle='crie seu app'
        id='project-2'
      >
        <Video autoPlay muted loop id="color-matcher">
          <source src={ColorMatcher} type="video/mp4" />
          Your browser does not support HTML5 video.
        </Video>
      </Project>
      {/* <ProjectDescription></ProjectDescription> */}
      <Spacer></Spacer>
      <Showcase></Showcase>
      <Spacer></Spacer>
      <Blog></Blog>
      <Spacer></Spacer>
      <About></About>
      <Spacer></Spacer>
      <Contact></Contact>
      <Spacer></Spacer>
    </Layout>
)
};

export default IndexPage
