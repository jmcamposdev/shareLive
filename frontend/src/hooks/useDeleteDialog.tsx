import React, { useEffect } from "react";
import { useState } from "react";
import DialogConfirmDel from "../components/common/Dialogs/DialogConfirmDel";


export const useDeleteDialog = ({
  onCancel,
  onSave,
  title,
  message,
  deleteElementName,
}: {
  onCancel: () => void;
  onSave: (values:any, actions:any) => Promise<void>
  title: string;
  message: string;
  deleteElementName: string;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleCancel = () => {
    setOpen(false);
    onCancel && onCancel();
  }

  const handleSave = async (values:any, actions:any) => {
    onSave && await onSave(values, actions);
    setOpen(false);
  }

  const dialogoProps = {
    open,
    onCancel: handleCancel,
    onSave: handleSave,
    title,
    message,
    deleteElementName,
  }

  const DialogElement = <DialogConfirmDel {...dialogoProps} />;

  return {
    DialogElement,
    handleOpen,
  };
}