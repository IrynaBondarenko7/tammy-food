import { Link as ScrollLink } from "react-scroll";

import jsonData from "..//../data/header.json";

type NavBarProps = {
  onClose?: () => void;
};

export const NavBar = ({ onClose }: NavBarProps) => {
  const data = jsonData.navLinks;
  return (
    <nav>
      <ul className="flex flex-col xl:flex-row gap-10 xl:gap-14 items-center">
        {data.map((item, index) => {
          return (
            <li key={index}>
              <ScrollLink
                to={item.pathTo}
                href="/"
                smooth={true}
                offset={-10}
                spy={true}
                duration={500}
                ignoreCancelEvents={false}
                onClick={onClose}
                className="text-titleColor font-sagoeUI text-xl font-bold hover:text-secondAccent transition-all duration-300 hover:border-b-2 hover:border-secondAccent"
              >
                {item.text}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
