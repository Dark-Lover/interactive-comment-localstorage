import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { to_delete, newchange_false } from "../../redux";
import { removeComment } from "../../controllers/removeController";
// prettier-ignore
import {ModalContainer,ModalWrapper,ModalTitle,ModalMsg,ModalCtrl,ModalCancel,ModalAccept,
} from "./ModalStyling";

const Modal = () => {
  const dispatch = useDispatch();
  const origin = useSelector((state) => state.toDelete);
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalTitle>Delete comment</ModalTitle>
        <ModalMsg>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </ModalMsg>
        <ModalCtrl>
          <ModalCancel onClick={() => dispatch(to_delete({}))}>
            NO, CANCEL
          </ModalCancel>
          <ModalAccept
            onClick={() => {
              removeComment(origin.id);
              dispatch(newchange_false());
              dispatch(to_delete({}));
            }}
          >
            YES, DELETE
          </ModalAccept>
        </ModalCtrl>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
