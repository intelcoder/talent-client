import React, { Component } from 'react'
import R from 'ramda'
import ResponsiveImage from 'Components/ResponsiveImage'
import css from './styles.css'

// shows area image with area name on the image
const AreaPreviewCard = ({imageSrc, alt, areaName}) => {
  return (
    <div className={css.areaPreviewCard} >
      <ResponsiveImage
        imageSrc={'/static/images/cities/toronto.jpg'}
        alt='toronto'
       />
       <div className={css.coverContainer}>
         <div className={css.areaName}>{areaName}</div>
       </div>
    
    </div>
  )
}


export default AreaPreviewCard