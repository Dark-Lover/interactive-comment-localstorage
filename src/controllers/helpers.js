//! Delete Item
export const deleteItem = (arr, itemId) => {
  const newArr = arr.filter((el) => el.id !== itemId);
  return newArr;
};

//! To UPDATE
// This function Returns the Comment Or Reply to update
export const toUpdate = (arr, id) => {
  let output = {};
  arr.comments.forEach((el) => {
    if (el.id === id) {
      output = { comment: el, reply: "" };
    } else if (el.id !== id) {
      el.replies.forEach((rep) => {
        if (rep.id === id) {
          output = { comment: el, reply: rep };
        }
      });
    }
  });

  return output;
};

//! Generate ID
// This function generate ID
export const getId = (arr) => {
  let id = 0;
  arr.comments.forEach((el) => {
    id++;
    if (el.replies !== []) id += el.replies.length;
  });
  return id + 1;
};
