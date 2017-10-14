import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { CoursePreview, AreaPreviewCard } from 'Components'
import { MaxWidthContainer } from 'Layout'
import css from './styles.css'

class Home extends Component {
  render() {
    return (
      <div className={css.home}>
        <MaxWidthContainer>
          <div>
            <div className={css.sectionTitle}>Popular Courses</div>
            <div className={css.previewGrid}>
              <div>
                <CoursePreview />
                <CoursePreview />
                <CoursePreview />
                <CoursePreview />
                <CoursePreview />
                <CoursePreview />
              </div>
            </div>
          </div>
          <div className={css.sectionTitle}>Areas</div>
          <div>
            <AreaPreviewCard areaName="Toronto"/>
          </div>
          <div className={css.sectionTitle}>Categories</div>
        </MaxWidthContainer>
      </div>
    )
  }
}

export default Home