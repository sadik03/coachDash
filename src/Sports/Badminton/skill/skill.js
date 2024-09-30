import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
} from '@coreui/react'

const SportsSkills = () => {
  const skills = [
    { name: 'Agility', level: 'Advanced' },
    { name: 'Strength', level: 'Intermediate' },
    { name: 'Endurance', level: 'Expert' },
    { name: 'Speed', level: 'Advanced' },
    { name: 'Flexibility', level: 'Beginner' },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sports Skills</strong> <small>Skill Levels</small>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              {skills.map((skill, index) => (
                <CListGroupItem key={index} className="d-flex justify-content-between align-items-center">
                  {skill.name}
                  <CBadge color="primary" shape="rounded-pill">{skill.level}</CBadge>
                </CListGroupItem>
              ))}
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SportsSkills
