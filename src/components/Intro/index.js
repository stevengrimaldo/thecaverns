import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Content = styled.div`
  max-width: calc(1000px + (6.94444% * 2));
  width: 100%;
  padding: 0 6.94444%;
  margin: 0 auto 75px;
  text-align: center;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`

// prettier-ignore
const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans';
  font-weight: 500;
  color: #ffffff;

  ${p => p.inverted && `
    color: #999999;
  `}
`

// prettier-ignore
const Title = styled.h3`
  font-size: 60px;
  line-height: 65px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Separat';
  font-weight: 700;
  color: #ffffff;

  ${p => p.inverted && `
    color: #110a20;
  `}

  @media (max-width: 1023px) {
    font-size: 30px;
    line-height: 35px;
  }
`

const Intro = ({ content, inverted }) => (
  <div>
    <Content>
      <Title inverted={inverted}>{content.title}</Title>
      {content.text && <Text inverted={inverted}>{content.text}</Text>}
    </Content>
  </div>
)

Intro.propTypes = {
  content: PropTypes.object,
  inverted: PropTypes.bool,
}

export default Intro
