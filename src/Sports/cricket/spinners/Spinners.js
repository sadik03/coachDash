import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CSpinner, CRow } from '@coreui/react'

const VideoAnalysis = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Video Analysis</strong> <small>Loading Video</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Please wait while the video is being loaded for analysis.
            </p>
            <CSpinner color="primary" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Video Analysis</strong> <small>Analysis in Progress</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The video analysis is in progress. Please be patient.
            </p>
            <CSpinner color="success" variant="grow" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Video Analysis</strong> <small>Analysis Complete</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The video analysis has been successfully completed.
            </p>
            <CButton color="primary">View Results</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default VideoAnalysis
