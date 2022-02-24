import styled from "styled-components";

export const ReplyContainer = styled.div``;
export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;
export const ReplyBox = styled.div`
  padding-left: 1.5rem;
  /* padding-top: 1rem;
  padding-bottom: 1rem; */
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &::before {
    background-color: hsl(228, 12%, 88%);
    position: absolute;
    content: "";
    height: 100%;
    width: 0.1rem;
    z-index: 1000;
    left: 0;
  }
`;
