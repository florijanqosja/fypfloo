import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          <h1 className="whiteColor font20" style={{ marginLeft: "15px", color: "#ffffff" }}>
            DibraSpeaks
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>
      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px", color: "#ffffff" }}
            to="/"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Label
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px", color: "#ffffff" }}
            to="/validate"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Validate
          </Link>
        </li>
        <li className="semiBold font15 pointer">
<<<<<<< Updated upstream
          <a
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="whiteColor"
            style={{ padding: "10px 15px", color: "#ffffff" }}
            href="https://community.uneduashqiperine.com/" // Updated URL here
          >
            Community
          </a>
=======
          <SidebarLoginButton href="https://community.uneduashqiperine.com/" target="_blank" rel="noopener noreferrer">
            Login
          </SidebarLoginButton>
>>>>>>> Stashed changes
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px 0;
`;

const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;

const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;

const SidebarLoginButton = styled.a`
  padding: 8px 20px;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  background-color: #301616; 
  color: #FFFFFF;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b33e3a;
    color: #FFFFFF;
  }
`;
