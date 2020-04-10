import React from 'react'
import styled from '@emotion/styled'

import { Container, Icon } from '../'

import { social } from '../../global/data'

const Content = styled.div`
  border-top: 1px solid #cccccc;
  color: #cccccc;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  text-transform: uppercase;
  font-family: 'Separat';
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`

const Wrapper = styled.footer`
  background-color: #ffffff;
  position: relative;
  z-index: 2;

  .social {
    display: flex;

    &__link {
      background-color: #cccccc;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      margin: 0 5px;
      text-align: center;

      &-icon {
        display: inline-block;

        svg,
        img {
          width: 100%;
          height: auto;
        }
      }

      a,
      span {
        cursor: pointer;
        height: 34px;
        display: block;
        fill: #ffffff;
      }

      &:first-of-type {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    @media (max-width: 768px) {
      &__link {
        width: 28px;
        height: 28px;

        a,
        span {
          height: 28px;
        }
      }
    }
  }
`

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Wrapper>
      <Container>
        <Content>
          <div>&copy; {currentYear} The Caverns</div>
          <div>
            <div className="social--wrapper">
              <ul className="social">
                {social.map((item, i) => {
                  let classes = 'social__link'
                  if (item.class) {
                    classes += ' item.class'
                  }
                  return (
                    <li key={i} className={classes}>
                      {item.url ? (
                        <a
                          href={item.url}
                          rel={item.arrow ? '' : 'noopener noreferrer'}
                          target={item.arrow ? '' : '_blank'}
                        >
                          <i className="social__link-icon">
                            <Icon name={item.icon} />
                          </i>
                        </a>
                      ) : (
                        <span>
                          <i className="social__link-icon">
                            <Icon name={item.icon} />
                          </i>
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Footer
