/* eslint-disable prettier/prettier */
import React from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'

const LessonPlanView = ({ subject, topic, date }) => {
  return (
    <table className="table w-100">
      <tbody>
        <tr>
          <td className="text-body-secondary">Subject:</td>
          <td className="font-weight-bold">{subject}</td>
        </tr>
        <tr>
          <td className="text-body-secondary">Topic:</td>
          <td className="font-weight-bold">{topic}</td>
        </tr>
        <tr>
          <td className="text-body-secondary">Date:</td>
          <td className="font-weight-bold">{date}</td>
        </tr>
      </tbody>
    </table>
  )
}

const LessonPlanRecord = ({ className, subject, topic, date }) => {
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={className} style={{ paddingTop: '75%' }}></div>
      <LessonPlanView subject={subject} topic={topic} date={date} />
    </CCol>
  )
}

const LessonPlans = () => {
  const lessonPlanData = [
    { subject: 'Mathematics', topic: 'Algebra Basics', date: '2024-01-15' },
    { subject: 'Science', topic: 'Photosynthesis', date: '2024-01-16' },
    { subject: 'History', topic: 'World War II', date: '2024-01-17' },
    // Add more lesson plans as needed
  ]

  return (
    <CCard className="mb-4">
      <CCardHeader>Lesson Plans</CCardHeader>
      <CCardBody>
        <CRow>
          {lessonPlanData.map((lesson, index) => (
            <LessonPlanRecord
              key={index}
              className="bg-info"
              subject={lesson.subject}
              topic={lesson.topic}
              date={lesson.date}
            />
          ))}
        </CRow>
      </CCardBody>
    </CCard>
  )
}

// eslint-disable-next-line prettier/prettier
export default LessonPlans
