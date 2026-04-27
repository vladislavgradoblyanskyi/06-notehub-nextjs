"use client"
import { createPortal } from "react-dom";
import { useEffect } from "react";
import css from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}


export default function Modal({ children, onClose }: ModalProps){

    useEffect(() => {
       function handleEsc(evt: KeyboardEvent) {
         if (evt.key === "Escape") {
           onClose();
         }
       }

       window.addEventListener("keydown", handleEsc);
       return () => {window.removeEventListener("keydown", handleEsc)};
     },
     [onClose]
    );

    return createPortal(
      <div className={css.backdrop} onClick={onClose} role="dialog" aria-modal="true">
        <div className={css.modal} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      document.body
    );
}