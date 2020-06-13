import React from "react"
import { Link } from "gatsby"

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

const Spacer = styled.section`
    height: 50px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="caio gomes" />
    <Home></Home>
    <Spacer></Spacer>
    <Project title='app 1'>
      mostra minhas habilidades de criar interfaces bonitas e simples com 
      utilidade e o uso de serviços e apis para garantir a sincronização do 
      serviço com diversas plataformas, de sites até aplicativos, além de 
      websockets e outras features importantes, e aproxima de saúde
    </Project>
    <Spacer></Spacer>
    <Project title='app 2' direction='reverse'>
    mostra minha capacidade de criar aplicativos que utilizam de fato bastante 
    do hardware e com necessidades específicas e mostra que não é só de saúde 
    que meus apps são feitos
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

export default IndexPage
