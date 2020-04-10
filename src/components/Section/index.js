import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Container, Intro } from '../'

// prettier-ignore
const Wrapper = styled.section`
  background-color: #110a20;
  border-color: #110a20;
  position: relative;
  padding: 80px 0;
  color: #ffffff;
  min-height: 800px;

  ${p => (
    p.slantBottomLeft ||
    p.slantBottomRight ||
    p.slantTopLeft ||
    p.slantTopRight
  ) && `
    &::before,
    &::after {
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      right: 0;
    }
  `}

  ${p => p.slantBottomLeft && `
    margin-bottom: 120px;
    padding-bottom: 80px;

    &::after {
      content: '';
      border-top-color: inherit;
      border-top-style: solid;
      border-top-width: 120px;
      border-right: 100vw solid transparent;
      bottom: -120px;
    }

    ${p.aboveMap && `
      &::after {
        z-index: 10;
      }
    `}
  `}

  ${p => p.slantBottomRight && `
    margin-bottom: 120px;
    padding-bottom: 80px;

    &::after {
      content: '';
      border-top-color: inherit;
      border-top-style: solid;
      border-top-width: 120px;
      border-left: 100vw solid transparent;
      bottom: -120px;
    }

    ${p.aboveMap && `
      &::after {
        z-index: 10;
      }
    `}
  `}

  ${p => p.slantTopLeft && `
    margin-top: 120px;
    padding-top: 80px;

    &::before {
      content: '';
      border-bottom-color: inherit;
      border-bottom-style: solid;
      border-bottom-width: 120px;
      border-right: 100vw solid transparent;
      top: -120px;
    }
  `}

  ${p => p.slantTopRight && `
    margin-top: 120px;
    padding-top: 80px;

    &::before {
      content: '';
      border-bottom-color: inherit;
      border-bottom-style: solid;
      border-bottom-width: 120px;
      border-left: 100vw solid transparent;
      top: -120px;
    }
  `}

  ${p => p.halfPadding && `
    padding: 40px 0;
  `}

  ${p => p.halfBottomPadding && `
    padding-bottom: 40px;
  `}

  ${p => p.halfTopPadding && `
    padding-top: 40px;
  `}

  ${p => p.noPadding && `
    padding: 0;
  `}

  ${p => p.noBottomPadding && `
    padding-bottom: 0;
  `}

  ${p => p.noTopPadding && `
    padding-top: 0;
  `}

  ${p => p.bgColor === 'white' && `
    background-color: #ffffff;
    border-color: #ffffff;
    color: #cccccc;
    z-index: 2;
  `}

  ${p => p.bgColor === 'orange' && `
    background-color: #f64a19;
  `}

  &:last-of-type {
    min-height: initial;
  }

  @media (max-width: 980px) {
    ${p => p.slantBottomLeft && `
      margin-bottom: 60px;

      &::after {
        border-top-width: 60px;
        bottom: -60px;
      }
    `}

    ${p => p.slantBottomRight && `
      margin-bottom: 60px;

      &::after {
        border-top-width: 60px;
        bottom: -60px;
      }
    `}

    ${p => p.slantTopLeft && `
      margin-top: 60px;

      &::before {
        border-bottom-width: 60px;
        top: -60px;
      }
    `}

    ${p => p.slantTopRight && `
      margin-top: 60px;

      &::before {
        border-bottom-width: 60px;
        top: -60px;
      }
    `}
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`

const Section = ({
  aboveMap,
  as,
  bgColor,
  children,
  className,
  halfBottomPadding,
  halfPadding,
  halfTopPadding,
  intro,
  id,
  name,
  noBottomPadding,
  noPadding,
  noTopPadding,
  slantBottomLeft,
  slantBottomRight,
  slantTopLeft,
  slantTopRight,
  small,
  tag,
  unContain = false,
}) => (
  <Wrapper
    aboveMap={aboveMap}
    as={as}
    bgColor={bgColor}
    className={className}
    halfPadding={halfPadding}
    halfBottomPadding={halfBottomPadding}
    halfTopPadding={halfTopPadding}
    id={id}
    name={name}
    noPadding={noPadding}
    noBottomPadding={noBottomPadding}
    noTopPadding={noTopPadding}
    slantBottomLeft={slantBottomLeft}
    slantBottomRight={slantBottomRight}
    slantTopLeft={slantTopLeft}
    slantTopRight={slantTopRight}
    small={small}
    tag={tag}
  >
    {intro && <Intro content={intro} inverted={bgColor === 'white'} />}
    {unContain ? children : <Container>{children}</Container>}
  </Wrapper>
)

Section.propTypes = {
  aboveMap: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  bgColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  halfBottomPadding: PropTypes.bool,
  halfPadding: PropTypes.bool,
  halfTopPadding: PropTypes.bool,
  id: PropTypes.string,
  intro: PropTypes.object,
  name: PropTypes.string,
  noBottomPadding: PropTypes.bool,
  noPadding: PropTypes.bool,
  noTopPadding: PropTypes.bool,
  slantBottomLeft: PropTypes.bool,
  slantBottomRight: PropTypes.bool,
  slantTopLeft: PropTypes.bool,
  slantTopRight: PropTypes.bool,
  small: PropTypes.bool,
  tag: PropTypes.string,
  unContain: PropTypes.bool,
}

export default Section
