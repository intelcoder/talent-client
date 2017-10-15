import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.css'

// This component have max width
const MaxWidthContainer = ({rootClass, children}) => {
  const classes = `${css.maxWidthContainer} ${rootClass}`
  return(
    <div className={classes}>
      { children }
    </div>
  )
}

MaxWidthContainer.propTypes = {
  children: PropTypes.element.isRequired,
  rootClass: PropTypes.string,
}

export default MaxWidthContainer