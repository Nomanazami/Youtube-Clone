
import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Container = styled.div`
width:360px;
margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
cursor: pointer;
display: ${(props) => props.type === "sm" && "flex"};
gap:10px;
`;
const Image = styled.img`
width:100%;
height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
background-color:gray;
flex:1;

`;

const Details = styled.div`
display:flex;
margin-top: ${(props) => props.type !== "sm" && "16px"};
gap:12px;
flex:1;

`;
const ChannelImage = styled.img`
width:36px;
height:36px;
border-radius: 50%;
background-color: gray;
display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div`

`;
const Title = styled.h1`
font-size:16px;
font-weight:500;
color:${({ theme }) => theme.text}
`;
const ChannelName = styled.h2`
font-size:14px;
${({ theme }) => theme.textSoft};
margin : 9px 0;
`;
const Info = styled.div`
font-size:14px;
${({ theme }) => theme.textSoft};

`;

function Card({ type,photo }) {

  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>

    <Container type={ type} >
    <Image src="https://lh5.googleusercontent.com/p/AF1QipMCydsxzp2dQaFWpmL7Os4cWwkSYd2ziifm3gCU=w540-h312-n-k-no" />
    <Details>
      <ChannelImage src="https://img.freepik.com/premium-vector/golden-bird-logo-design_1195-336.jpg" />
      <Texts>
        <Title>Heart Full "MAKKAH" Video</Title>
        <ChannelName>Lame Dave</ChannelName>
        <Info>663,999 views . 1 day ago</Info>
      </Texts>
    </Details>
    </Container>
    </Link>
  )
}

export default Card
