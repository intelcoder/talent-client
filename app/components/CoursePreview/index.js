import React, { Component } from 'react'
import R from 'ramda'
import ResponsiveImage from 'Components/ResponsiveImage'
import css from './styles.css'

const CoursePreview = ({imageSrc, courseTitle, Rating, category, location}) => {
  return (
    <div className={css.coursePreview} >
      <ResponsiveImage 
        imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFNbGQ3A_ji_dxxhDo1ykwLsIr4DPKBWe6xEEULtpUBGewJE8-g'}
        alt="alt"
      />
      <div>
        <img
            src='/static/images/teyoun.jpg'
            className={css.tutorImage}
          />
        <div>
          <div className={css.courseTitle}>Course Title</div>
        </div>
        <div className={css.courseInfo}>
          Rating
          Subcategory
          location
        </div>
      </div>
    </div>
  )
}


export default CoursePreview