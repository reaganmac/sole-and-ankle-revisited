/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <>
      <StyledDialogOverlay isOpen={isOpen}>
        <StyledDialogContent aria-label='Navigation menu for mobile devices'>
          <CloseButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id='close' />
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink href='/sale'>Sale</NavLink>
            <NavLink href='/new'>New&nbsp;Releases</NavLink>
            <NavLink href='/men'>Men</NavLink>
            <NavLink href='/women'>Women</NavLink>
            <NavLink href='/kids'>Kids</NavLink>
            <NavLink href='/collections'>Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href='/terms'>Terms and Conditions</FooterLink>
            <FooterLink href='/privacy'>Privacy Policy</FooterLink>
            <FooterLink href='/contact'>Contact Us</FooterLink>
          </Footer>
        </StyledDialogContent>
      </StyledDialogOverlay>
    </>
  );
};

const StyledDialogOverlay = styled(DialogOverlay)`
  background: var(--color-backdrop);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`;

const StyledDialogContent = styled(DialogContent)`
  height: 100vh;
  width: 300px;
  background: white;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: flex-end;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: 0.875rem;
`;

const Filler = styled.div`
  flex: 1;
`;

export default MobileMenu;
