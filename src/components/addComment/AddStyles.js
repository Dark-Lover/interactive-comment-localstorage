import styled from "styled-components";

export const AddContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`;
export const AddWrapper = styled.div`
  padding: 1rem;
  position: relative;
  background-color: white;
  margin-top: 0.5rem;
`;
export const AddInput = styled.textarea`
  width: 100%;
  min-height: 5rem;
  border: 1px solid hsl(228, 12%, 88%);
  resize: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  outline: none;
  line-height: 1.3rem;
  letter-spacing: 0.01rem;
  color: hsl(206, 3%, 45%);
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;

  &:focus {
    border: 1px solid hsl(242, 32%, 51%);
  }
  &::-webkit-scrollbar {
    width: 10px;
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #a9a9a9;
    cursor: pointer;
  }
`;
export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: blue;
  margin-right: 1rem;
`;
export const SendBtn = styled.button`
  font-family: "Rubik", sans-serif;
  padding: 0.8rem 1.5rem;
  font-weight: 400;
  letter-spacing: 0.03rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  background-color: hsl(242, 32%, 51%);
  /* background-color: ${(props) =>
    props.type === "EDIT"
      ? "blue"
      : props.type === "Reply"
      ? "green"
      : "red"}; */
  cursor: pointer;
  &:hover {
    background-color: hsl(242, 32%, 60%);
  }
`;
