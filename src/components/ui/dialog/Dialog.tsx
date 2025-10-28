import classNames from "classnames";
import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import type ReactModal from "react-modal";
import Modal from "react-modal";
import useWindowSize from "../hooks/useWindowsize";

export interface DialogProps extends ReactModal.Props {
  closable?: boolean;
  contentClassName?: string;
  onClose?: (e: MouseEvent<HTMLSpanElement | HTMLButtonElement>) => void;
  height?: string | number;
  width?: number;
}

const Dialog = (props: DialogProps) => {
  const currentWindowSize = useWindowSize();

  const {
    closable,
    contentClassName,
    onClose,
    height,
    width = 520,

    //Inner
    closeTimeoutMS = 150,
    overlayClassName,
    bodyOpenClassName,
    children,
    portalClassName,
    className,
    style,
    isOpen,
    ...rest
  } = props;

  const onCloseClick = (e: MouseEvent<HTMLSpanElement>) => {
    onClose?.(e);
  };

  const renderCloseButton = (
    <button type="button" onClick={onCloseClick}>
      X
    </button>
  );

  const contentStyle = {
    content: {
      inset: "unset",
    },
    ...style,
  };

  if (width !== undefined) {
    contentStyle.content.width = width;

    if (
      typeof currentWindowSize.width !== "undefined" &&
      currentWindowSize.width <= width
    ) {
      contentStyle.content.width = "auto";
    }
  }

  if (height !== undefined) {
    contentStyle.content.height = height;
  }

  const defaultDialogContentClass = "dialog-content";

  const dialogClass = classNames(defaultDialogContentClass, contentClassName);

  return (
    <Modal
      className={{
        base: classNames("dialog", className as string),
        afterOpen: "dialog-after-open",
        beforeClose: "dialog-before-close",
      }}
      overlayClassName={{
        base: classNames("dialog-overlay", overlayClassName as string),
        afterOpen: "dialog-overlay-after-open",
        beforeClose: "dialog-overlay-before-close",
      }}
      portalClassName={classNames("dialog-portal", portalClassName)}
      bodyOpenClassName={classNames("dialog-open", bodyOpenClassName)}
      ariaHideApp={false}
      isOpen={isOpen}
      style={{ ...contentStyle }}
      closeTimeoutMS={closeTimeoutMS}
      {...rest}
    >
      <motion.div
        className={dialogClass}
        initial={{ transform: "scale(0.9)" }}
        animate={{
          transform: isOpen ? "scale(1)" : "scale(0.9)",
        }}
      >
        {closable && renderCloseButton}
        {children}
      </motion.div>
    </Modal>
  );
};

export default Dialog;
