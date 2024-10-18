import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';

import { Container } from './Container';


const HeaderEl = styled.header`
box-shadow: var(--shadow);
bacjground-color: var(--colors-ui-base);

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.a.attrs({
  href: '/',
})``;

const ModeSwitcher = styled.div``;



export const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);    
    }, [theme]);
  

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            <IoMoon /> Light Mode
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};