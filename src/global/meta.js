import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Meta = ({ children, data }) => (
  <Helmet
    defaultTitle="The Caverns"
    meta={data.meta}
    title={data.title}
    titleTemplate="%s | The Caverns"
  >
    {children}
  </Helmet>
)

Meta.propTypes = {
  children: PropTypes.node,
  data: PropTypes.shape({
    meta: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    title: PropTypes.string,
  }),
}

export default Meta
