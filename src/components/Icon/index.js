import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { matchIcon } from '../../global/utils'

// styled-components
const Wrapper = styled.div`
  svg {
    height: auto;
    width: auto;
    max-width: 100%;
    display: inline-block;
  }
`

// component
const Icon = ({ className, inverted, name, onClick }) => {
  const MatchedIcon = matchIcon(name)
  return (
    <Wrapper className={className} onClick={onClick}>
      <MatchedIcon inverted={inverted} />
    </Wrapper>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  inverted: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
}

export default Icon
