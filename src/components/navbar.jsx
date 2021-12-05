import React from 'react';
import styled from 'styled-components';
import Burger from './burger';


const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #f1f1f1;
  background-color: #15164d;
  color: #fff;
  position: relative;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    color: #fff;
    padding: 15px 0;
    font-size: 30px;
    font-family: Times New Roman;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      Life~Is~Insane
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar