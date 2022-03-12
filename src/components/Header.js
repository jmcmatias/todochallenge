import { HeaderStyle, Applogo } from "./Header-style";
import LogoImage from "../logo.png"

const Header = () => {
  return (
    <HeaderStyle>
      <Applogo src={LogoImage}/>
    </HeaderStyle>
  );
};

export default Header;
