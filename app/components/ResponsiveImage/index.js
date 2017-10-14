import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.css'


const ResponsiveImage = ({imageSrc, alt}) => {
  return (
    <img
      className={css.responsiveImage}
      src={imageSrc}
      alt={alt} 
    />
  )
}

ResponsiveImage.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
}

export default ResponsiveImage