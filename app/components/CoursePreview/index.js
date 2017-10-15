import React, { Component } from 'react'
import R from 'ramda'
import ResponsiveImage from 'Components/ResponsiveImage'
import css from './styles.css'

const CoursePreview = ({imageSrc, courseTitle, Rating, category, location}) => {
  return (
    <div className={css.coursePreview} >
      <div className={css.courseImageContainer}>
        <ResponsiveImage 
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFNbGQ3A_ji_dxxhDo1ykwLsIr4DPKBWe6xEEULtpUBGewJE8-g'}
          alt="alt"
        />
        
        {/*
          maybe its not good idea to show price. can reduce click rate
         <div className={css.price}>CAD $50</div> 
         */}
      </div>
      <div>
        <img
            src='/static/images/teyoun.jpg'
            className={css.tutorImage}
          />
        <div>
          <div className={css.courseTitle}>This course can teach you ...</div>
        </div>
        <div className={css.courseInfo}>
          Star 5.0 (7)
          Group
          North york
        </div>
      </div>
    </div>
  )
}


export default CoursePreview