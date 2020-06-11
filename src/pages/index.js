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
    <Project></Project>
    {/* <ProjectDescription></ProjectDescription> */}
    <Spacer></Spacer>
    <Project direction='reverse'></Project>
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
