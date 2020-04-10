import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

// prettier-ignore
const Wrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  font-family: 'Separat';
  font-weight: 700;

  > a,
  > span {
    display: block;
    cursor: pointer;
    border: 1px solid #f64a19;
    background-color: #f64a19;
    color: #ffffff;
    padding: 16px 24px;
    text-align: center;
    text-transform: uppercase;
    transition: 250ms background-color, 250ms color, 250ms border;
  }

  @media (max-width: 959px) {
    &:hover {
      > a,
      > span {
        border: 1px solid #f64a19;
        background-color: #ffffff;
        color: #f64a19;
      }
    }
  }

  ${p => p.inverted && `
    > a,
    > span {
      background-color: transparent;
      color: #f64a19;
    }

    &:hover {
      > a,
      > span {
        background-color: #f64a19;
        color: #ffffff;
      }
    }
  `}
`

const Button = ({ className, external, inverted, path, text }) => (
  <Wrapper className={className} inverted={inverted}>
    <a
      href={path}
      rel={external ? 'noopener noreferrer' : ''}
      target={external ? '_blank' : ''}
    >
      {text}
    </a>
  </Wrapper>
)

Button.propTypes = {
  className: PropTypes.string,
  external: PropTypes.bool,
  inverted: PropTypes.bool,
  path: PropTypes.string,
  text: PropTypes.string,
}

export default Button
