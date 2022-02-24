import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(127, 127, 127, 0.5);
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalWrapper = styled.div`
  height: 11rem;
  background-color: white;
  width: 20rem;
  margin: 0 1rem;
  border-radius: 0.5rem;
  padding: 1rem;
`;
export const ModalTitle = styled.div`
  color: hsl(215, 10%, 35%);
  font-weight: 700;
  display: flex;
  align-items: center;
  font-size: 1rem;
`;
export const ModalMsg = styled.div`
  margin-top: 0.3rem;
  padding: 0.5rem 0;
  line-height: 1.3rem;
  letter-spacing: 0.01rem;
  color: hsl(206, 3%, 45%);
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
`;
export const ModalCtrl = styled.div`
  display: flex;
  gap: 0.5rem;
  color: white;
  text-align: center;
`;
export const ModalCancel = styled.div`
  flex: 1;
  width: 50%;
  background-color: hsl(215, 10%, 45%);
  padding: 0.7rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: hsl(215, 10%, 60%);
  }
`;
export const ModalAccept = styled.div`
  flex: 1;
  width: 50%;
  background-color: hsl(358, 79%, 66%);
  padding: 0.7rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: hsl(358, 79%, 80%);
  }
`;
