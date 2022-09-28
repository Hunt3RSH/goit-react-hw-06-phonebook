import { StyledContainer } from 'components/ContactForm/ContactForm.styled';
import { Stack } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { Copy, CopyWrapper, FooterStyle, NavListLink } from './Layout.styled';
import LogoBook from '../../img/LogoBook.png';

export const Layout = () => {
  return (
    <>
      <Navbar expand="lg">
        <StyledContainer>
          <Navbar.Brand href="./goit-react-hw-06-phonebook">
            <img src={LogoBook} alt="Logo" width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Stack className="me-auto" direction="horizontal" gap={3}>
              <NavListLink to="/" end>
                Home
              </NavListLink>
              <NavListLink to="contacts">My Contacts</NavListLink>
            </Stack>
          </Navbar.Collapse>
        </StyledContainer>
      </Navbar>
      <Outlet />
      <FooterStyle>
        <StyledContainer>
          <CopyWrapper>
            © 2022 created by
            <Copy href="https://github.com/Hunt3RSH" target="_blank">
              Hunt3R
            </Copy>
          </CopyWrapper>
        </StyledContainer>
      </FooterStyle>
    </>
  );
};
