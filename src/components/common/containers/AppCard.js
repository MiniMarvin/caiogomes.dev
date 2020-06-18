import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Link = styled.a`
  text-decoration: none;
`;

const Card = styled.div`
  border-bottom-width: 1px;
  border-bottom-color: black;
  border-bottom-style: solid;
  /* border-radius: 10px; */
  width: 100%;
  margin: 5px auto 15px;
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  /* background-color: #FACD8E; */
  /* box-shadow: 0px 0px 5px rgba(24, 40, 82, 0.5); */

  h3, p {
    margin: 0px;
  }
`;

const ImgDiv = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CustomImg = styled(Img)`
  border-radius: 5px;
`;

function AppCard(props) {
  return (
    <Link href={props.link} target='_blank'>
      <Card>
        <ImgDiv>
          {/* <CustomImg fixed={props.img}></CustomImg> */}
          {props.img ?
            <CustomImg fixed={props.img} /> :
            null
          }
        </ImgDiv>
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </Card>
    </Link>
  );
}

export default AppCard;
