import React from 'react'
import PropTypes from 'prop-types'

import Meta from './meta'

const PageWrapper = ({ children, className, meta, pageClass }) => {
  let classes = 'components'
  if (pageClass) {
    classes += ` components--${pageClass}`
  }
  if (className) {
    classes += ` ${className}`
  }
  return (
    <div className={classes}>
      {meta && <Meta data={meta} />}
      {children}
    </div>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  meta: PropTypes.shape({
    meta: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    title: PropTypes.string,
  }),
  pageClass: PropTypes.string,
}

export default PageWrapper
