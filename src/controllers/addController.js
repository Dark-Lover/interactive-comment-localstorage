import { deleteItem, getId, toUpdate } from "./helpers";

// const { timePassed, deleteItem, getId, toUpdate } = require("./helpers");

//? Controllers

//! ADD
//* ADD a comment using Axios
export const addCommentToLs = (newCom) => {
  // Get data
  const comments = JSON.parse(localStorage.getItem("allData"));
  const newList = comments;
  const newId = getId(comments);
  const createdAt = new Date().getTime();
  const newComment = Object.assign(newCom, {
    id: newId,
    createdAt: createdAt,
    score: 0,
    replies: [],
    user: {
      image: {
        png: "image-juliusomo.png",
        webp: "image-juliusomo.webp",
      },
      username: "juliusomo",
    },
  });
  newList.comments.push(newComment);
  localStorage.setItem("allData", JSON.stringify(newList));
};

//* AddReply
export const addReplyToLs = (newRep, id) => {
  // Get data
  const comments = JSON.parse(localStorage.getItem("allData"));
  const newList = comments;
  const replyToId = id;
  const newId = getId(comments);
  const createdAt = new Date().getTime();
  const commentInfo = toUpdate(newList, replyToId);
  const newComment = Object.assign(newRep, {
    id: newId,
    createdAt: createdAt,
    score: 0,
    replyingTo: commentInfo.comment.user.username,
    user: {
      image: {
        png: "image-juliusomo.png",
        webp: "image-juliusomo.webp",
      },
      username: "juliusomo",
    },
  });
  commentInfo.comment.replies.push(newComment);
  const updatedComment = commentInfo.comment;
  // Remove old version of the Comment
  const updatedList = deleteItem(newList.comments, commentInfo.comment.id);
  // Push the Updated Comment to the list of Comments
  updatedList.push(updatedComment);
  // Update the whole list of comments Inside the newList
  newList.comments = updatedList;
  // Replace the Old file with the new One
  localStorage.setItem("allData", JSON.stringify(newList));
};
