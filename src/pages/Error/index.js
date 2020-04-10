import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  alignItems: 'center',
  display: 'flex',
  fontFamily: '-apple-system, Helvetica, Arial',
  fontSize: 36,
  fontWeight: 600,
  height: '100%',
  justifyContent: 'center',
}

export const Error = ({ message, status }) => (
  <div style={styles}>
    {status}{' '}
    <span style={{ fontWeight: 300 }}>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <span style={{ fontSize: 28 }}>{message}</span>
    </span>
  </div>
)

Error.propTypes = {
  message: PropTypes.string,
  status: PropTypes.string,
}

export default Error
