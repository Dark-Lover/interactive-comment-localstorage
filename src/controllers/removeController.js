import { deleteItem, toUpdate } from "./helpers";

//! Remove Comment
export const removeComment = (id) => {
  // Get data
  const comments = JSON.parse(localStorage.getItem("allData"));
  const newList = comments;
  const myId = id;
  const toUpdateIs = toUpdate(newList, myId);
  const { comment, reply } = toUpdateIs;
  if (toUpdateIs.reply !== "") {
    //! Delete a Reply
    // delete reply
    const updatedReplies = deleteItem(comment.replies, reply.id);
    // update Replies
    comment.replies = updatedReplies;
    // Update Comment
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
    //! Delete comment
    const updatedList = deleteItem(newList.comments, comment.id);
    newList.comments = updatedList;
    localStorage.setItem("allData", JSON.stringify(newList));
  }
};
