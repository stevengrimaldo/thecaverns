import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { matchPath, withRouter } from 'react-router'
import styled from '@emotion/styled'

import { Container } from '../'

import { Logo } from '../../global/icons'

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLogo = styled.div`
  max-width: 272px;
  width: 100%;

  a {
    display: block;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1023px) {
    max-width: 200px;
  }
`

const Item = styled.div`
  display: inline-block;
`

// prettier-ignore
const Link = styled.a`
  padding: 15px;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 24px;
  display: block;
  font-family: 'Separat';
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  ${p => p.isActive && `
    border-bottom: 3px solid #f64a19;
  `}

  @media (max-width: 1023px) {
    font-size: 8vw;
  }
`

// prettier-ignore
const AnchorLink = styled(Link)`
  ${p => p.isActive && `
    border-bottom: 0 none;
  `}
`

const List = styled.ul`
  text-align: right;

  @media (max-width: 1023px) {
    text-align: left;
    display: flex;
    flex-direction: column;
  }
`

const Nav = styled.nav`
  @media (max-width: 1023px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #110a20;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: none;
  }
`

const NavTrigger = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  width: 70px;
  padding: 10px 15px;
  cursor: pointer;

  > i {
    height: 3px;
    width: 39px;
    background-color: #ffffff;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }

  &::before,
  &::after {
    content: '';
    width: 39px;
    height: 3px;
    background-color: #ffffff;
    display: block;
    position: absolute;
    right: 16px;
  }

  &::before {
    top: 17px;
  }

  &::after {
    bottom: 17px;
  }

  @media (max-width: 1023px) {
    display: block;
  }
`

// prettier-ignore
const Wrapper = styled.header`
  background-color: #110a20;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  z-index: 3;

  &.headroom {
    transition: transform 0.25s ease-in-out;
    will-change: transform;

    &--pinned {
      transform: translateY(0);
    }

    &--unpinned {
      transform: translateY(-100%);
    }
  }

  > div {
    height: 100%;
  }

  @media (max-width: 1023px) {
    height: 60px;

    ${p => p.open && `
      .header__nav {
        display: flex;

        &-trigger {
          > i {
            display: none;
          }

          &::before,
          &::after {
            top: 50%;
          }

          &::before {
            transform: rotate(45deg);
          }

          &::after {
            transform: rotate(-45deg);
            bottom: auto;
          }
        }
      }
    `}
  }
`

const Header = ({ location }) => {
  const [navOpen, setNavOpen] = useState(false)
  const aboutMatch = matchPath(location.pathname, {
    exact: false,
    path: '/about',
    strict: false,
  })
  const showsMatch = matchPath(location.pathname, {
    exact: false,
    path: '/',
    strict: false,
  })
  const packagesMatch = matchPath(location.pathname, {
    exact: false,
    path: '/packages',
    strict: false,
  })
  const questionsMatch = matchPath(location.pathname, {
    exact: false,
    path: '/questions',
    strict: false,
  })
  const mobileMenuHandler = () => setNavOpen(!navOpen)
  return (
    <Wrapper open={navOpen}>
      <Container>
        <Content>
          <HeaderLogo>
            <a href="/">
              <Logo />
            </a>
          </HeaderLogo>
          <Nav className="header__nav">
            <List>
              <Item>
                <Link isActive={Boolean(aboutMatch)} href="/about">
                  About
                </Link>
              </Item>
              <Item>
                <AnchorLink isActive={Boolean(showsMatch)} href="/#shows">
                  Shows
                </AnchorLink>
              </Item>
              <Item>
                <Link isActive={Boolean(packagesMatch)} href="/packages">
                  Packages
                </Link>
              </Item>
              <Item>
                <Link isActive={Boolean(questionsMatch)} href="/questions">
                  Questions
                </Link>
              </Item>
            </List>
          </Nav>
          <NavTrigger
            className="header__nav-trigger"
            onClick={mobileMenuHandler}
          >
            <i />
          </NavTrigger>
        </Content>
      </Container>
    </Wrapper>
  )
}

Header.propTypes = {
  location: PropTypes.object,
}

export default withRouter(Header)
