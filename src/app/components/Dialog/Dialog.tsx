import React from "react";
import { FaCheck } from "react-icons/fa";
import { Button } from "../Button/Button";
import { Portal } from "../Portal";

type DialogProps = {
  header?: string;
  message?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

export const Dialog: React.FC<DialogProps> = (props) => {
  const { header = "", message = "", isOpen = false, onClose } = props;

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 p-4 bg-black/30 flex items-center justify-center">
        {/* DIALOG BOX */}
        <div className="h-auto w-full max-w-md bg-white rounded-2xl p-8 flex flex-col items-center gap-8">
          <div className=" h-24 w-24 -mt-20 bg-green-500 rounded-full flex items-center justify-center">
            <FaCheck size={40} className="text-white" />
          </div>
          <div className="h-auto w-full space-y-1 text-center">
            <p className="text-2xl font-bold">{header}</p>
            <p className="text-green-600">{message}</p>
          </div>
          <Button
            label="OK"
            layout="block"
            variant="solid"
            corner="rounded"
            onClick={onClose}
          />
        </div>
      </div>
    </Portal>
  );
};
