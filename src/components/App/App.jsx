import { Routes, Route, Link, useLocation, Outlet } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Tweets } from "../../pages/Tweets/Tweets";
// import { NotFound } from "../../pages/NotFound/NotFound";
import logoGoIt from "../../images/goit.png";
import {
  Header,
  Nav,
  StyledLink,
  Logo,
  HeaderText,
  Footer,
 
} from "./App.styled";
import { Suspense } from 'react';
import { routes } from "../../routes";


export const App = () => {
    const location = useLocation();
  return (
    <>
      <Header>
    
        <Link to="/">
            <Logo src={logoGoIt} alt="GOIT Logo" />
        </Link>
        <HeaderText>Test Task practic</HeaderText>
        
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/tweets" state={{ from: location }}>tweets</StyledLink>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Routes>
        <Route path={routes.HOME} element={<Home />} />
       
        <Route path={routes.TWEETS} element={<Tweets />} />
          <Route path="*" element={<Home />} />
       
      </Routes>

      <Footer> created by A.Murlykin 2023 © </Footer>
    </>
  );
};
