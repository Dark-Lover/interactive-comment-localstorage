import React from "react";
import styled from "styled-components";
import spinner from "../../assets/spinner.gif";
const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  background-color: hsl(210, 10%, 96%);
`;
const LoadingImg = styled.img`
  min-height: 400px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImg src={spinner} />
    </LoadingContainer>
  );
};

export default Loading;
