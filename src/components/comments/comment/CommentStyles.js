import styled from "styled-components";

export const CommentContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`;
export const CommentWrapper = styled.div`
  padding: 1rem;
  position: relative;
  display: flex;
  background-color: white;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;
export const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
`;
export const Infos = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.7rem;
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.03rem;
  color: hsl(221, 19%, 22%);
`;
export const CommentDate = styled.div`
  color: hsl(206, 3%, 45%);
  font-weight: 500;
  letter-spacing: 0.03rem;
  font-size: 0.75rem;
  margin-left: 0.7rem;
`;
export const Message = styled.p`
  padding: 0.5rem 0;
  line-height: 1.3rem;
  letter-spacing: 0.01rem;
  color: hsl(206, 3%, 45%);
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
`;
export const CommentStats = styled.div`
  background-color: hsl(225, 25%, 97%);
  color: hsl(245, 26%, 81%);
  padding: 0.5rem 0;
  border-radius: 0.3rem;
  width: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
  @media screen and (min-width: 600px) {
    flex-direction: column;
    width: 2.3rem;
    margin-right: 1rem;
  }
`;
export const Count = styled.div`
  color: hsl(242, 32%, 51%);
  font-weight: 700;
`;

export const Reply = styled.div`
  cursor: pointer;
  color: hsl(242, 32%, 51%);
  padding: 0.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.3rem;
  }
  @media screen and (min-width: 600px) {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
  }
`;
export const ModifyComment = styled.div`
  right: 1rem;
  bottom: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`;
export const DeleteCom = styled.div`
  display: flex;
  align-items: center;
  color: hsl(358, 79%, 66%);
  cursor: pointer;
`;
export const EditCom = styled.div`
  display: flex;
  align-items: center;
  color: hsl(242, 32%, 51%);
  cursor: pointer;
`;

export const MessageControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    order: 2;
  }
`;
