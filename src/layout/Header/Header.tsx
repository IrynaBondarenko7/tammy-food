import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Logo } from "../../components/Logo";
import { NavBar } from "../../components/NavBar";
import { BurgerMenu } from "../../components/BurgerMenu";
import MenuIcon from "../../assets/icons/menu.svg?react";

export const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1279px)" });

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const onClose = () => setIsBurgerOpen(false);

  return (
    <header className="container font-sagoeUI py-4 fixed top-0 left-1/2 -translate-x-1/2">
      {isDesktopOrLaptop && (
        <div className="flex justify-between items-center ">
          <Logo isHeaderLogo={true} />
          <NavBar />
        </div>
      )}
      {isTabletOrMobile && (
        <>
          <button
            type="button"
            aria-label="to open menu"
            onClick={() => setIsBurgerOpen(true)}
            className="xl:hidden text-accent active:text-accentPressed p-2 md:p-0"
          >
            <MenuIcon />
          </button>
          <BurgerMenu isOpen={isBurgerOpen} onClose={onClose} />
        </>
      )}
    </header>
  );
};
