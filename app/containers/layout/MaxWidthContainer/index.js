import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.css'

// This component have max width
const MaxWidthContainer = ({classes, children}) => {
  return(
    <div className={css.maxWidthContainer}>
      <div>
        { children }
      </div>
    </div>
  )
}

MaxWidthContainer.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    inner: PropTypes.string,
  })
}

export default MaxWidthContainer