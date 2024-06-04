import classNames from "classnames";

type LogoProps = {
  isHeaderLogo?: boolean;
  isFooterLogo?: boolean;
};

export const Logo = ({ isHeaderLogo, isFooterLogo }: LogoProps) => {
  const className = classNames({
    "text-titleColor": isHeaderLogo,
    "text-white": isFooterLogo,
  });

  return (
    <a href="/" className="text-secondAccent font-inter text-3xl">
      <span className={className}>Tammy</span> Food
    </a>
  );
};
