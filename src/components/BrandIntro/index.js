import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Button, Section } from '../'

import { LogoFull } from '../../global/icons'

const Divider = styled.hr`
  background-color: rgba(#999999, 0.5);
  width: 50%;
  height: 1px;
  margin: 30px auto 0;
`

const Content = styled.div`
  perspective: 2000px;
  perspective-origin: top;
  text-align: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  h5 {
    margin-bottom: 15px;
    font-size: 36px;
    line-height: 42px;
    color: #110a20;
    font-family: 'Separat';
    font-weight: 700;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    color: #99999;
    font-family: 'Work Sans';
    font-weight: 400;
  }

  @media (max-width: 1023px) {
    h5 {
      font-size: 24px;
    }
  }
`

const LearnMore = styled(Button)`
  margin-top: 30px;
`

const Logo = styled.div`
  margin-bottom: 30px;
  transform-style: preserve-3d;
  will-change: transform;
  max-width: 145px;
  max-height: 145px;
  display: inline-block;

  svg,
  img {
    width: 100%;
    height: auto;
  }
`

const Wrapper = styled(Section)`
  min-height: initial;
`

const BrandIntro = ({ content }) => (
  <Wrapper bgColor="white" halfBottomPadding slantTopRight>
    <div>
      <Content>
        <Logo>
          <i>
            <LogoFull />
          </i>
        </Logo>
        <h5>{content.title}</h5>
        <p>{content.text}</p>
        <Divider />
        <LearnMore inverted path="/about" text="Learn More" />
      </Content>
    </div>
  </Wrapper>
)

BrandIntro.propTypes = {
  content: PropTypes.object,
}

export default BrandIntro
