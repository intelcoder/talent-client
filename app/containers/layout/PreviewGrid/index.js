import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.css'


const PreviewGrid = ({rootClass = '', children}) => {
  const classes = `${css.previewGrid} ${rootClass}`
  return (
   <div className={classes}>{children}</div>
  )
}

export default PreviewGrid