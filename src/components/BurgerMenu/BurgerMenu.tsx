import { Dialog, DialogPanel } from "@headlessui/react";
import CloseIcon from "../../assets/icons/close.svg?react";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

type BurgerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const BurgerMenu = ({ isOpen, onClose }: BurgerProps) => {
  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 flex w-screen  p-4 h-full bg-backgroundColor">
          <DialogPanel className="w-full pt-4">
            <button
              onClick={onClose}
              aria-label="to close menu"
              className="text-accent hover:text-btnHover transition-all duration-300 block ml-auto"
            >
              <CloseIcon className="stroke-2 stroke-current" />
            </button>
            <div className="flex flex-col gap-4 items-center pt-4">
              <Logo isHeaderLogo />
              <NavBar onClose={onClose} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
