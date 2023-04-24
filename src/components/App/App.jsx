import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home/Home';
import { Cards } from '../../pages/Cards/Cards';
import { NotFound } from '../../pages/NotFound';

import logoGoIt from '../../images/goit.png';
import { Header, StyledLink, Logo, HeaderText, Footer } from './App.styled';

export const App = () => {
  return (
    <>
      <Header>
          <Logo src={logoGoIt} alt="GOIT Logo" />
          <HeaderText >Test Task practic</HeaderText >
       
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/cards">tweets</StyledLink>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer> created by A.Murlykin 2023 © </Footer>
    </>
  );
};
