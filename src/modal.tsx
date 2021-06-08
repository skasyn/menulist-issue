import React from "react";
import { Dialog as ReachDialog } from "@reach/dialog";
import {
  AlertDialog as ReachAlertDialog,
  AlertDialogLabel as ReachAlertDialogLabel,
  AlertDialogDescription as ReachAlertDialogDescription,
} from "@reach/alert-dialog";
import styled from "@emotion/styled/macro";

const Dialog = styled(ReachDialog)({
  boxShadow: "5px 5px 20px rgba(48, 35, 173, 0.18)",
  borderRadius: 8,
  width: "unset",
  minWidth: "50vw",
});

const AlertDialog = styled(ReachAlertDialog)({
  borderRadius: 8,
  maxWidth: 500,
  top: "30%",
  transform: "translateY(-50%)",
  position: "relative",
});

const AlertModalLabel = styled(ReachAlertDialogLabel)();

const AlertModalDescription = styled(ReachAlertDialogDescription)();

const callAll = (...fns: any[]) => (...args: any[]) => fns.forEach((fn) => fn && fn(...args));

type ModalContextValue = [boolean, (state: boolean) => void];
const ModalContext = React.createContext<ModalContextValue>((null as unknown) as ModalContextValue);
ModalContext.displayName = "ModalContext";

export interface ModalProps {
  onOpen?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
}

function Modal({ onOpen, onClose, ...props }: ModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const setOpen = React.useCallback(
    (state: boolean) => {
      if (state) {
        onOpen?.();
      } else {
        onClose?.();
      }
      setIsOpen(state);
    },
    [onOpen, onClose]
  );

  return <ModalContext.Provider value={[isOpen, setOpen]} {...props} />;
}

function useModal() {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within the Modal component");
  }
  return context;
}

interface WithChildrenProps {
  children: React.ReactElement<any>;
}

function ModalDismissButton({ children }: WithChildrenProps) {
  const [, setIsOpen] = useModal();
  return React.cloneElement(children, {
    onClick: callAll(() => setIsOpen(false), children?.props.onClick),
  });
}

function ModalOpenButton({ children }: WithChildrenProps) {
  const [, setIsOpen] = useModal();
  return React.cloneElement(children, {
    onClick: callAll(() => setIsOpen(true), children?.props.onClick),
  });
}

function ModalContents({ onDismiss, ...props }: React.ComponentProps<typeof Dialog>) {
  const [isOpen, setIsOpen] = useModal();
  return (
    <Dialog isOpen={isOpen} onDismiss={callAll(() => setIsOpen(false), onDismiss)} {...props} />
  );
}

function AlertModalContents(props: React.ComponentProps<typeof AlertDialog>) {
  const [isOpen, setIsOpen] = useModal();
  return <AlertDialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />;
}

export {
  Modal,
  ModalDismissButton,
  ModalOpenButton,
  ModalContents,
  useModal,
  AlertModalContents,
  AlertModalLabel,
  AlertModalDescription,
};
