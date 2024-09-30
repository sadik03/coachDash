import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CPaginationItem,
  CRow,
} from '@coreui/react'

const AgilityTests = () => {
  const agilityData = [
    { test: 'Shuttle Run', time: '9.5s', status: 'Pass' },
    { test: 'T-Test', time: '11.2s', status: 'Pass' },
    { test: 'Illinois Agility', time: '15.8s', status: 'Pass' },
    { test: 'Hexagon Drill', time: '12.1s', status: 'Fail' },
    { test: 'Lateral Shuffle', time: '10.5s', status: 'Pass' },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Agility Test Results</strong>
          </CCardHeader>
          <CCardBody>
            <ul>
              {agilityData.map((item, index) => (
                <li key={index}>
                  <strong>{item.test}</strong>: {item.time} - {item.status}
                </li>
              ))}
            </ul>
            <CPagination aria-label="Agility Test Pagination">
              <CPaginationItem>Previous</CPaginationItem>
              <CPaginationItem>1</CPaginationItem>
              <CPaginationItem>2</CPaginationItem>
              <CPaginationItem>Next</CPaginationItem>
            </CPagination>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AgilityTests
