import { useContext, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { useAppSelector } from "../../hooks/reduxHooks";

const popup = document.querySelector("#pop-up");

const Modal = (props: any) => {
  const store = useAppSelector((store) => store.popUpSlice);
  // const container = useMemo(() => {
  //   const container = document.createElement("div");
  //   return container;
  // }, [store.isOpen]);

  const container = document.createElement("div");

  useEffect(() => {
    popup!.appendChild(container);
    return () => {
      popup!.removeChild(container);
    };
  });
  if (store.isOpen === true) {
    return createPortal(<div>Hello Portal</div>, container);
  }
  return null;
};

export default Modal;
