import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import {IconButton} from '../buttons/buttons';
import Img from 'gatsby-image';

function SocialMedia(props) {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "foto-alta-qualidade.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 140, height: 140) {
                        ...GatsbyImageSharpFixed
                    }
                    fluid(maxHeight: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                }
            }
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
            whatsapp: file(relativePath: { eq: "icons/whatsapp.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            linkedin: file(relativePath: { eq: "icons/linkedin.png" }) {
                childImageSharp {
                    fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    console.log(`gmail: ${props.gmail}`);

    return (
        <>
            {
                props.github === false ? null :
                <IconButton href='https://github.com/minimarvin'>
                    <Img fixed={data.github.childImageSharp.fixed}></Img>
                </IconButton>
            }
            {
                props.linkedin === false ? null :
                <IconButton href='https://linkedin.com/in/caiogomes001'>
                    <Img fixed={data.linkedin.childImageSharp.fixed}></Img>
                </IconButton>
            }
            {
                props.medium === false ? null :
                <IconButton href='https://medium.com/@caiogomes_dev'>
                    <Img fixed={data.medium.childImageSharp.fixed}></Img>
                </IconButton>
            }
            {
                props.instagram === false ? null :
                <IconButton href='https://instagram.com/caiogomes_dev'>
                    <Img fixed={data.instagram.childImageSharp.fixed}></Img>
                </IconButton>
            }
            {
                props.twitter === false ? null :
                <IconButton href='https://twitter.com/caiogomes_dev'>
                    <Img fixed={data.twitter.childImageSharp.fixed}></Img>
                </IconButton>
            }
            {
                props.gmail === false ? null :
                <IconButton href='mailto:contato@caiogomes.dev?subject=Gostaria de conversar com você'>
                    <Img fixed={data.gmail.childImageSharp.fixed}></Img>
                </IconButton>
            }
            {
                props.whatsapp === false ? null :
                <IconButton href='https://wa.me/5581992558512?text=Oi%21%0D%0AGostaria%20de%20contratar%20seus%20serviços%20'>
                    <Img fixed={data.whatsapp.childImageSharp.fixed}></Img>
                </IconButton>
            }
        </>
    )
}

export default SocialMedia;