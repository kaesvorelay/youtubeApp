import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { open } from "../../store/reducer/reducerPopUp";
import ContentWrapper from "./ConentWrapper";
import PopUpForm from "./PopUpForm";
import PopUpInput from "./PopUpInput";
import SubmitBtn from "./SubmitBtn";
import ExitBtn from "./ExitBtn";

const popup = document.querySelector("#pop-up");

const Modal = () => {
  const store = useAppSelector((store) => store.popUpSlice);
  const dispatch = useAppDispatch();
  const container = useMemo(() => {
    const container = document.createElement("div");
    return container;
  }, [store.isOpen]);

  const closePopUp = (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (event.currentTarget === event.target) {
      event.stopPropagation();
      dispatch(open());
    }
  };

  useEffect(() => {
    popup!.appendChild(container);
    return () => {
      popup!.removeChild(container);
    };
  });
  if (store.isOpen === true) {
    return createPortal(
      <div className="modal" onClick={closePopUp}>
        <ExitBtn onClick={closePopUp}>Exit</ExitBtn>
        <ContentWrapper>
          <PopUpForm>
            <PopUpInput
              placeholder="e-mail"
              type="email"
              textLabel="Enter e-mail"
            />
            <PopUpInput
              placeholder="pasword"
              type="pasword"
              textLabel="Enter pasword"
            />
            <SubmitBtn>SUBMIT</SubmitBtn>
          </PopUpForm>
        </ContentWrapper>
      </div>,
      container
    );
  }
  return null;
};

export default Modal;
