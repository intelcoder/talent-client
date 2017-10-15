import React, { Component } from 'react'
import { MaxWidthContainer, PreviewGrid } from 'Layout'
import { CoursePreview } from 'Components'
import css from './styles.css'

class Course extends Component {

  render() {
    return (
      <MaxWidthContainer>
        <div className={css.searchFilterContainer}>
          Search Filters
          <div>
            <input type="text" placeholder="Search a tutor or course autocomplete" />
            <input type="text" placeholder="Category" />
            <input type="text" placeholder="area" />
          </div>

        </div>
        <div className={css.courseListContainer}>
         <PreviewGrid>
           <CoursePreview />
           <CoursePreview />
           <CoursePreview />
           <CoursePreview />
           <CoursePreview />
           <CoursePreview />
         </PreviewGrid>
        </div>
      </MaxWidthContainer>
    )
  }
}

export default Course