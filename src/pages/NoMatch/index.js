import React from 'react'
import PropTypes from 'prop-types'

import { parseContent } from '../../global/utils'

const NoMatch = ({ data }) => (
  <div>
    <h1>{data.title}</h1>
    <div dangerouslySetInnerHTML={parseContent(data.content)} />
  </div>
)

NoMatch.propTypes = {
  data: PropTypes.object,
}

export default NoMatch
