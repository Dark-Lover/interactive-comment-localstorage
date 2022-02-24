import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCommentToLs,
  addReplyToLs,
} from "./../../controllers/addController";
import { updateCommentOnLs } from "./../../controllers/updateController";
// prettier-ignore
import {
  AddContainer,AddWrapper,AddInput,User,Avatar,SendBtn,
} from "./AddStyles";
import { add_comment, newchange_false } from "../../redux";

const AddComment = ({ type, origin, setterHandler }) => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const hideInput = setterHandler !== "" ? setterHandler : () => {};
  // if (origin) console.log(`we are ${type} to ${origin.id} with type: ${type}`);
  // else {
  //   console.log("just ADDING A NEW COMMENT");
  // }
  const handleInput = (val) => {
    setMessage(val);
  };
  const handleAction = (type) => {
    //* ADD a New Comment
    if (type === "SEND") {
      dispatch(add_comment(message));
      const newMsg = { content: message };
      addCommentToLs(newMsg);
      dispatch(newchange_false());
    }
    //* ADD a New Reply
    if (type === "Reply") {
      dispatch(add_comment(message));
      const data = { content: message };
      addReplyToLs(data, origin.id);
      dispatch(newchange_false());
    }
    //* Update a Comment
    if (type === "UPDATE") {
      dispatch(add_comment(message));
      const data = message;
      updateCommentOnLs(data, origin.id);
      dispatch(newchange_false());
    }
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <AddContainer>
      <AddWrapper>
        <AddInput
          onChange={(e) => handleInput(e.target.value)}
          defaultValue={
            type === "UPDATE"
              ? `${origin?.content} `
              : type === "Reply"
              ? `@${origin?.user.username} `
              : message
          }
        />
        <User>
          <Avatar src={require(`../../assets/avatars/${user?.image.png}`)} />
          <SendBtn
            type={type}
            onClick={() => {
              handleAction(type);
              hideInput(false);
              // setClearInput(true);
            }}
          >
            {type === "Reply" ? "SEND" : type}
          </SendBtn>
        </User>
      </AddWrapper>
    </AddContainer>
  );
};

export default AddComment;
