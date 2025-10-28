import classNames from "classnames";
import { motion } from "motion/react";
import type { MouseEvent } from "react";
import { ReactNode } from "react";
import type ReactModal from "react-modal";
import Modal from "react-modal";

interface DrawerProps extends ReactModal.Props {
  bodyClass?: string;
  showBackdrop?: boolean;
  lockScroll?: boolean;
  title?: string | ReactNode;
  closable?: boolean;
  headerClass?: string;
  footer?: string | ReactNode;
  footerClass?: string;
  onClose?: (e: MouseEvent<HTMLSpanElement>) => void;
  //----------------
  placement?: "top" | "right" | "bottom" | "left";
  width?: string | number;
  height?: string | number;
  //----------------
}

if (typeof window !== "undefined") {
  Modal.setAppElement(document.getElementById("_R_") as HTMLElement);
}

const Drawer = (props: DrawerProps) => {
  const {
    isOpen,
    showBackdrop = true,
    lockScroll = true,
    title,
    closable,
    footer,
    footerClass,
    headerClass,
    onClose,
    placement = "right",
    height = 300,
    width = 300,

    //inner
    children,
    portalClassName,
    className,
    overlayClassName,
    bodyOpenClassName,
    bodyClass,
    closeTimeoutMS = 300,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    shouldCloseOnOverlayClick,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    shouldCloseOnEsc,
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

  // Get the style for the drawer based on its placement
  const getStyle = (): {
    dimensionClass?: string;
    contentStyle?: {
      width?: string | number;
      height?: string | number;
    };
    motionStyle: {
      [x: string]: string;
    };
  } => {
    if (placement === "left" || placement === "right") {
      return {
        dimensionClass: "vertical",
        contentStyle: { width },
        motionStyle: {
          [placement]: `-${width}${typeof width === "number" && "px"}`,
        },
      };
    }

    if (placement === "top" || placement === "bottom") {
      return {
        dimensionClass: "horizontal",
        contentStyle: { height },
        motionStyle: {
          [placement]: `-${height}${typeof height === "number" && "px"}`,
        },
      };
    }

    return {
      motionStyle: {},
    };
  };
  const { dimensionClass, contentStyle, motionStyle } = getStyle();

  return (
    <Modal
      className={{
        base: classNames("drawer", className as string),
        afterOpen: "drawer-after-open",
        beforeClose: "drawer-before-close",
      }}
      overlayClassName={{
        base: classNames(
          "drawer-overlay z-60",
          overlayClassName as string,
          !showBackdrop && "bg-transparent"
        ),
        afterOpen: "drawer-overlay-after-open",
        beforeClose: "drawer-overlay-before-close",
      }}
      portalClassName={classNames("drawer-portal", portalClassName)}
      bodyOpenClassName={classNames(
        "drawer-open",
        lockScroll && "drawer-lock-scroll",
        bodyOpenClassName
      )}
      ariaHideApp={false}
      isOpen={isOpen}
      closeTimeoutMS={closeTimeoutMS}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      {...rest}
    >
      <motion.div
        className={classNames("drawer-content", dimensionClass)}
        style={contentStyle}
        initial={motionStyle}
        animate={{
          [placement as "top" | "right" | "bottom" | "left"]: isOpen
            ? 0
            : motionStyle[placement],
        }}
      >
        {title || closable ? (
          <div className={classNames("drawer-header", headerClass)}>
            {typeof title === "string" ? (
              <h4>{title}</h4>
            ) : (
              <span>{title}</span>
            )}
            {closable && renderCloseButton}
          </div>
        ) : null}
        <div className={classNames("drawer-body", bodyClass)}>{children}</div>
        {footer && (
          <div className={classNames("drawer-footer", footerClass)}>
            {footer}
          </div>
        )}
      </motion.div>
    </Modal>
  );
};

export default Drawer;
