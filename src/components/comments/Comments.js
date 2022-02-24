import React from "react";
import { useSelector } from "react-redux";
import AddComment from "../addComment/AddComment";
import { CommentsContainer, CommentsWrapper } from "./CommentsStyles";
import ShowComment from "./reply/ShowComment";
import Loading from "../loading/Loading";
import Modal from "../modal/Modal";

const Comments = ({ data, dataReady }) => {
  const comments = data;
  const toDelete = useSelector((state) => state.toDelete);
  return (
    <>
      <CommentsContainer>
        <CommentsWrapper>
          {dataReady ? (
            comments.map((comment) => {
              return <ShowComment content={comment} key={comment.id} />;
            })
          ) : (
            <Loading />
          )}

          {dataReady ? <AddComment type="SEND" setterHandler="" /> : ""}
        </CommentsWrapper>
      </CommentsContainer>
      {Object.keys(toDelete).length !== 0 &&
        toDelete.constructor === Object && <Modal />}
    </>
  );
};

export default Comments;
