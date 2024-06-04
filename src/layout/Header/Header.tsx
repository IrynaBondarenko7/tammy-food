import { Logo } from "../../components/Logo";

export const Header = () => {
  return (
    <header className="container font-sagoeUI">
      <Logo isHeaderLogo={true} />
    </header>
  );
};
