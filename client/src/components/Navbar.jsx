import React from 'react'
import {Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, MenuItem} from '../styles/Navbar.styles.js'
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shoppe</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>

          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar