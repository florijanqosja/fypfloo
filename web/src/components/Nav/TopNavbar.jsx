import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function MainNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" onClick={() => window.scrollTo(0, 0)} smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              DibraSpeaks
            </h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link to="/" activeClass="active" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Label
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/validate" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Validate
              </Link>
            </li>
<<<<<<< Updated upstream
            {/* <li className="semiBold font15 pointer">
              <Link to="/" activeClass="active" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Record
              </Link>
            </li> */}
            <li className="semiBold font15 pointer">
              <a
                href="https://community.uneduashqiperine.com/"
                rel="noopener noreferrer" // Recommended for security when using target="_blank"
                style={{ padding: "10px 15px" }}
              >
                Community
              </a>
=======
            <li>
              <LoginButton href="https://community.uneduashqiperine.com/" target="_blank" rel="noopener noreferrer">
                Login
              </LoginButton>
>>>>>>> Stashed changes
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const LoginButton = styled.a`
  margin-left: 40px;  
  padding: 8px 20px;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  background-color: #301616; 
  color: #FFFFFF;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #b33e3a;
    color: #FFFFFF;
  }
`;

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
