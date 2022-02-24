import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { to_delete } from "../../../redux";
// React icons
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { FaReply } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
// prettier-ignore
import {
  CommentContainer,CommentWrapper,Content,CommentAuthor,Infos,Avatar,Name,CommentDate,Message,MessageControl,CommentStats,Count,Reply,ModifyComment,DeleteCom,EditCom,
} from "./CommentStyles";
import AddComment from "../../addComment/AddComment";
import { useEffect } from "react";

const Comment = ({ content }) => {
  const [reply, setReply] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {}, [edit]);
  return (
    <CommentContainer>
      <CommentWrapper>
        <Content>
          <CommentAuthor>
            <Infos>
              <Avatar
                src={require(`../../../assets/avatars/${content.user.image.png}`)}
              />
              <Name>{content.user.username}</Name>
            </Infos>
            <CommentDate>{content.createdAt}</CommentDate>
          </CommentAuthor>
          <Message>{content.content}</Message>
        </Content>
        <MessageControl>
          <CommentStats>
            <HiPlusSm />
            <Count>{content.score}</Count>
            <HiMinusSm />
          </CommentStats>
          {content.user.username === "juliusomo" ? (
            <Reply>
              <ModifyComment>
                <DeleteCom onClick={() => dispatch(to_delete(content))}>
                  <MdDelete /> Delete
                </DeleteCom>
                <EditCom onClick={() => setEdit(!edit)}>
                  <RiPencilFill /> Edit
                </EditCom>
              </ModifyComment>
            </Reply>
          ) : (
            <Reply onClick={() => setReply(!reply)}>
              <FaReply /> Reply
            </Reply>
          )}
        </MessageControl>
      </CommentWrapper>
      {reply ? (
        <AddComment type="Reply" origin={content} setterHandler={setReply} />
      ) : (
        ""
      )}
      {edit ? (
        <AddComment type="UPDATE" origin={content} setterHandler={setEdit} />
      ) : (
        ""
      )}
    </CommentContainer>
  );
};

export default Comment;
