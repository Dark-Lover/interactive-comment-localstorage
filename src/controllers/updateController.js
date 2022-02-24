import { deleteItem, toUpdate } from "./helpers";

// Get data
const comments = JSON.parse(localStorage.getItem("allData"));

//! UPDATE
//* Update a Reply, then a Comment
export const updateCommentOnLs = (updCom, id) => {
  // Get Update Text and Comment ID
  const newContent = updCom;
  const newList = comments;
  const myId = id;
  // Get Comment or Reply to update
  const toUpdateIs = toUpdate(newList, myId);
  const { comment, reply } = toUpdateIs;
  console.log(toUpdateIs);
  if (reply !== "") {
    //! Update a Reply
    const replyIndex = comment.replies.findIndex((rep) => rep.id === reply.id);
    comment.replies[replyIndex].content = newContent;
    const updatedComment = comment;
    // Remove old version of the Comment that has the reply
    const updatedList = deleteItem(newList.comments, comment.id);
    // Push the Updated Comment to the list of Comments
    updatedList.push(updatedComment);
    // Update the whole list of comments Inside the newList
    newList.comments = updatedList;
    // Replace the Old file with the new One
    localStorage.setItem("allData", JSON.stringify(newList));
  } else {
    //! Update a Comment
    comment.content = newContent;
    const updatedComment = comment;
    // console.log(updatedComment);
    const updatedList = deleteItem(newList.comments, comment.id);
    updatedList.push(updatedComment);
    newList.comments = updatedList;
    localStorage.setItem("allData", JSON.stringify(newList));
  }
};
