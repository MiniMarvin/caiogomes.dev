import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Top = styled.div`
  padding: 20px;
`
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.span`
  font-size: 2em;
`

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-caio.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Top>
      <Logo>
        <Img fixed={data.logo.childImageSharp.fixed} />
        <Title>Caio Gomes</Title>
      </Logo>
    </Top>
  )
}
