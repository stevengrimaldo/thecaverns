import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

// prettier-ignore
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  ${p => p.contain && `
    padding: 0 6.9444444444%;
  `}
`

const Container = ({ children, className, contain = true }) => (
  <Wrapper className={className} contain={contain}>
    {children}
  </Wrapper>
)

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  contain: PropTypes.bool,
}

export default Container
