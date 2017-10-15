import React, { Component } from 'react'
import { MaxWidthContainer, PreviewGrid } from 'Layout'
import { CoursePreview } from 'Components'
import css from './styles.css'

class CourseDetail extends Component {

  render() {
    console.log(this.props)
    const { params } = this.props.match
    return (
      <MaxWidthContainer>
        Course detail {params.courseId}
       
      </MaxWidthContainer>
    )
  }
}

export default CourseDetail