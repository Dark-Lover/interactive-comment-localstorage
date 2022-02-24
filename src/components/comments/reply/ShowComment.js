import React from "react";
import Comment from "../comment/Comment";
import { ReplyContainer, ReplyWrapper, ReplyBox } from "./ShowCommentStyles";

const ReplyCom = ({ content }) => {
  return (
    <ReplyContainer>
      <ReplyWrapper>
        <Comment content={content} />
        {content.replies.length !== 0 ? (
          <ReplyBox>
            {content.replies.map((reply) => {
              return <Comment content={reply} key={reply.id} />;
            })}
          </ReplyBox>
        ) : (
          ""
        )}
      </ReplyWrapper>
    </ReplyContainer>
  );
};

export default ReplyCom;
