import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { CoursePreview, AreaPreviewCard } from 'Components'
import { MaxWidthContainer, PreviewGrid } from 'Layout'
import css from './styles.css'

class Home extends Component {
  render() {
    return (
      <MaxWidthContainer rootClass={css.home}>
        <div>
          <div className={css.sectionTitle}>Popular Courses</div>
          <div className={css.previewGrid}>
            <PreviewGrid>
              <CoursePreview />
              <CoursePreview />
              <CoursePreview />
              <CoursePreview />
              <CoursePreview />
              <CoursePreview />
            </PreviewGrid>
          </div>
        </div>
        <div className={css.sectionTitle}>Areas</div>
        <div>
          <AreaPreviewCard areaName="Toronto"/>
        </div>
        <div className={css.sectionTitle}>Categories</div>
      </MaxWidthContainer>
    
    )
  }
}

export default Home