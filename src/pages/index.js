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
        description='Esse é um aplicativo desenvolvido com o objetivo de acompanhar
        quem precisa tomar remédios em horários específicos fazendo um agendamento
        dos horários do medicamento e disponibilizando alarmes na hora que a pessoa
        cadastrou, com a possibilidade de adicionar dias específicos e em horários
        específicos. Foi feito em flutter e está disponível em iOS e Android'
        link={isAndroid ? remediozAndroid : remediozIos }
      >
        <Video autoPlay muted loop id="remedioz">
          <source src={Remedioz} type="video/mp4" />
          Your browser does not support HTML5 video.
        </Video>
      </Project>
      <Spacer></Spacer>
      <Project title='Color Matcher' direction='reverse'
        description='Um jogo casual feito nativamente em swift para iOS que utiliza 
        um feedback tátil para que o usuário tenha uma maior imersão na experiência, 
        a dificuldade vai aumentando com o tempo de jogo, que é controlado por swipes
        na tela. O usuário possui 5 vidas que são perdidas quando duas bolinhas de
        cores diferentes colidem entre si.'
        link='https://apps.apple.com/br/app/color-matcher-game/id1439815926'
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
