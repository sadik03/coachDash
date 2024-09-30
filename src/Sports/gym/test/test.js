import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
  CBadge,
} from '@coreui/react'

const SportsTests = () => {
  const sportsTests = [
    { name: 'Agility Test', score: '85', status: 'Pass' },
    { name: 'Speed Test', score: '90', status: 'Pass' },
    { name: 'Endurance Test', score: '78', status: 'Pass' },
    { name: 'Strength Test', score: '65', status: 'Fail' },
    { name: 'Flexibility Test', score: '72', status: 'Pass' },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sports Test Data</strong>
          </CCardHeader>
          <CCardBody>
            <CNav variant="tabs">
              {sportsTests.map((test, index) => (
                <CNavItem key={index}>
                  <CNavLink href="#">
                    {test.name} - Score: {test.score}{' '}
                    <CBadge color={test.status === 'Pass' ? 'success' : 'danger'}>
                      {test.status}
                    </CBadge>
                  </CNavLink>
                </CNavItem>
              ))}
            </CNav>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SportsTests
