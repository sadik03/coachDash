import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CPopover, CRow, CCol } from '@coreui/react'

const LessonPopover = ({ title, content, placement }) => {
  return (
    <CPopover title={title} content={content} placement={placement}>
      <CButton color="info">View Lesson</CButton>
    </CPopover>
  )
}

const PersonalLessonPlan = () => {
  const lessons = [
    {
      title: 'Math Lesson',
      content: 'Understand basic algebra concepts and solve equations.',
      placement: 'top',
    },
    {
      title: 'Science Lesson',
      content: 'Explore the basics of photosynthesis and plant biology.',
      placement: 'right',
    },
    {
      title: 'History Lesson',
      content: 'Learn about the key events of World War II.',
      placement: 'bottom',
    },
  ]

  return (
    <CRow>
      {lessons.map((lesson, index) => (
        <CCol key={index} xs={12} sm={6} md={4}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>{lesson.title}</strong>
            </CCardHeader>
            <CCardBody>
              <LessonPopover
                title={lesson.title}
                content={lesson.content}
                placement={lesson.placement}
              />
            </CCardBody>
          </CCard>
        </CCol>
      ))}
    </CRow>
  )
}

export default PersonalLessonPlan
